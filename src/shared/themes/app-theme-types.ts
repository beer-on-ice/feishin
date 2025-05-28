import type { MantineColorsTuple, MantineThemeOverride } from '@mantine/core';

export enum AppTheme {
    DEFAULT_DARK = 'defaultDark',
    DEFAULT_LIGHT = 'defaultLight',
}
export interface AppThemeConfiguration {
    app: {
        'badge-bg'?: string;
        'badge-fg'?: string;
        'btn-default-bg'?: string;
        'btn-default-bg-hover'?: string;
        'btn-default-border'?: string;
        'btn-default-fg'?: string;
        'btn-default-fg-hover'?: string;
        'btn-filled-bg'?: string;
        'btn-filled-bg-hover'?: string;
        'btn-filled-border'?: string;
        'btn-filled-fg'?: string;
        'btn-filled-fg-hover'?: string;
        'btn-outline-bg'?: string;
        'btn-outline-bg-hover'?: string;
        'btn-outline-border'?: string;
        'btn-outline-border-hover'?: string;
        'btn-outline-fg'?: string;
        'btn-outline-fg-hover'?: string;
        'btn-subtle-bg'?: string;
        'btn-subtle-bg-hover'?: string;
        'btn-subtle-border'?: string;
        'btn-subtle-fg'?: string;
        'btn-subtle-fg-hover'?: string;
        'card-default-bg'?: string;
        'card-default-bg-hover'?: string;
        'card-poster-bg'?: string;
        'card-poster-bg-hover'?: string;
        'danger-color'?: string;
        'dropdown-menu-bg'?: string;
        'dropdown-menu-bg-hover'?: string;
        'dropdown-menu-border'?: string;
        'dropdown-menu-fg'?: string;
        'dropdown-menu-item-font-size'?: string;
        'dropdown-menu-item-padding'?: string;
        'generic-border-color'?: string;
        'icon-color'?: string;
        'input-active-bg'?: string;
        'input-active-fg'?: string;
        'input-bg'?: string;
        'input-fg'?: string;
        'input-placeholder-fg'?: string;
        'main-bg'?: string;
        'main-bg-transparent'?: string;
        'main-fg'?: string;
        'main-fg-secondary'?: string;
        'modal-bg'?: string;
        'modal-header-bg'?: string;
        'paper-bg'?: string;
        'placeholder-bg'?: string;
        'placeholder-fg'?: string;
        'playerbar-bg'?: string;
        'playerbar-bg-active'?: string;
        'playerbar-border-top'?: string;
        'playerbar-btn-bg'?: string;
        'playerbar-btn-bg-hover'?: string;
        'playerbar-btn-fg'?: string;
        'playerbar-btn-fg-hover'?: string;
        'playerbar-btn-main-bg'?: string;
        'playerbar-btn-main-bg-hover'?: string;
        'playerbar-btn-main-fg'?: string;
        'playerbar-btn-main-fg-hover'?: string;
        'playerbar-slider-track-bg'?: string;
        'playerbar-slider-track-progress-bg'?: string;
        'primary-color'?: string;
        'root-font-size'?: string;
        'scrollbar-size'?: string;
        'scrollbar-thumb-bg'?: string;
        'scrollbar-thumb-bg-hover'?: string;
        'scrollbar-track-bg'?: string;
        'secondary-color'?: string;
        'sidebar-bg'?: string;
        'sidebar-bg-hover'?: string;
        'sidebar-border'?: string;
        'sidebar-fg'?: string;
        'sidebar-fg-hover'?: string;
        'sidebar-handle-bg'?: string;
        'skeleton-bg'?: string;
        'slider-thumb-bg'?: string;
        'slider-track-bg'?: string;
        'success-color'?: string;
        'switch-thumb-bg'?: string;
        'switch-track-bg'?: string;
        'switch-track-enabled-bg'?: string;
        'table-alt-bg'?: string;
        'table-bg'?: string;
        'table-border'?: string;
        'table-border-color'?: string;
        'table-fg'?: string;
        'table-header-bg'?: string;
        'table-header-fg'?: string;
        'table-row-hover-bg'?: string;
        'table-row-selected-bg'?: string;
        'titlebar-bg'?: string;
        'titlebar-controls-bg'?: string;
        'titlebar-fg'?: string;
        'toast-bg'?: string;
        'toast-description-fg'?: string;
        'toast-title-fg'?: string;
        'tooltip-bg'?: string;
        'tooltip-fg'?: string;
        'warning-color'?: string;
        'window-bar-bg'?: string;
        'window-bar-fg'?: string;
    };
    mantineOverride?: {
        /**
         * The colors of the theme.
         */
        colors: {
            dark?: MantineColorsTuple;
            primary: MantineColorsTuple;
            secondary: MantineColorsTuple;
        };

        /**
         * The black color of the theme.
         */
        defaultRadius?: MantineThemeOverride['defaultRadius'];

        /**
         * The focus ring of the theme.
         */
        focusRing?: MantineThemeOverride['focusRing'];

        /**
         * The font family of the theme.
         */
        fontFamily?: MantineThemeOverride['fontFamily'];

        /**
         * The font family of the theme for monospaced text.
         */
        fontFamilyMonospace?: MantineThemeOverride['fontFamilyMonospace'];

        /**
         * The font sizes of the theme.
         */
        fontSize?: MantineThemeOverride['fontSizes'];

        /**
         * The line heights of the theme.
         */
        lineHeights?: MantineThemeOverride['lineHeights'];

        /**
         * The primary shade of the theme for dark/light modes.
         */
        primaryShade?: MantineThemeOverride['primaryShade'];

        /**
         * The radius of the theme.
         */
        radius?: MantineThemeOverride['radius'];

        /**
         * The shadows of the theme.
         */
        shadows?: MantineThemeOverride['shadows'];

        /**
         * The spacing of the theme.
         */
        spacing?: MantineThemeOverride['spacing'];

        /**
         * The white color of the theme.
         */
        white?: MantineThemeOverride['white'];
    };
    stylesheets?: string[];
}
