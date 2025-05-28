import { useEffect, useMemo, useState } from 'react';

import { useSettingsStore } from '/@/renderer/store/settings.store';
import { AppTheme } from '/@/shared/types/domain-types';

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

    const getTheme = () => {
        if (followSystemTheme) {
            return isDarkTheme ? themeDark : themeLight;
        }

        return theme;
    };

    const appTheme = getTheme();

    useEffect(() => {
        const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
        darkThemeMq.addListener(mqListener);
        return () => darkThemeMq.removeListener(mqListener);
    }, []);

    useEffect(() => {
        document.body.setAttribute('data-theme', appTheme);
    }, [appTheme]);

    const themeVars = useMemo(() => {
        return Object.entries(appTheme)
            .map(([key, value]) => {
                return [`--theme-${key}`, value];
            })
            .filter(Boolean) as [string, string][];
    }, [appTheme]);

    useEffect(() => {
        document.documentElement.setAttribute('data-app-theme', appTheme);

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
    }, [appTheme, themeVars]);

    return THEME_DATA.find((t) => t.value === appTheme)?.type || 'dark';
};
