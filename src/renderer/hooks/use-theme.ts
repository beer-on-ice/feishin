import { useEffect, useMemo, useState } from 'react';

import { useSettingsStore } from '/@/renderer/store/settings.store';
import { getAppTheme } from '/@/shared/themes/app-theme';
import { AppTheme } from '/@/shared/themes/app-theme-types';

export const THEME_DATA = [
    { label: 'Default Dark', type: 'dark', value: AppTheme.DEFAULT_DARK },
    { label: 'Default Light', type: 'light', value: AppTheme.DEFAULT_LIGHT },
];

export const useTheme = () => {
    const getCurrentTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
    const { followSystemTheme, theme, themeDark, themeLight } = useSettingsStore(
        (state) => state.general,
    );

    const mqListener = (e: any) => {
        setIsDarkTheme(e.matches);
    };

    const getSelectedTheme = () => {
        if (followSystemTheme) {
            return isDarkTheme ? themeDark : themeLight;
        }

        return theme;
    };

    const selectedTheme = getSelectedTheme();

    useEffect(() => {
        const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
        darkThemeMq.addListener(mqListener);
        return () => darkThemeMq.removeListener(mqListener);
    }, []);

    const themeVars = useMemo(() => {
        return Object.entries(getAppTheme(selectedTheme).app)
            .map(([key, value]) => {
                return [`--theme-${key}`, value];
            })
            .filter(Boolean) as [string, string][];
    }, [selectedTheme]);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', selectedTheme);

        if (themeVars.length > 0) {
            let styleElement = document.getElementById('theme-variables');
            if (!styleElement) {
                styleElement = document.createElement('style');
                styleElement.id = 'theme-variables';
                document.head.appendChild(styleElement);
            }

            let cssText = ':root {\n';

            for (const [key, value] of themeVars) {
                cssText += `  ${key}: ${value};\n`;
            }

            cssText += '}';

            styleElement.textContent = cssText;
        }
    }, [selectedTheme, themeVars]);

    return THEME_DATA.find((t) => t.value === selectedTheme)?.type || 'dark';
};
