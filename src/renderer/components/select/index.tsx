import type {
    MultiSelectProps as MantineMultiSelectProps,
    SelectProps as MantineSelectProps,
} from '@mantine/core';

import { MultiSelect as MantineMultiSelect, Select as MantineSelect } from '@mantine/core';
import styled from 'styled-components';

export interface MultiSelectProps extends MantineMultiSelectProps {
    maxWidth?: number | string;
    width?: number | string;
}

export interface SelectProps extends MantineSelectProps {
    maxWidth?: number | string;
    width?: number | string;
}

const StyledSelect = styled(MantineSelect)`
    & [data-selected='true'] {
        background: var(--theme-input-bg);
    }

    & [data-disabled='true'] {
        background: var(--theme-input-bg);
        opacity: 0.6;
    }

    & .mantine-Select-label {
        margin-bottom: 0.5rem;
        font-family: var(--theme-label-font-family);
    }

    & .mantine-Select-itemsWrapper {
        & .mantine-Select-item {
            padding: 40px;
        }
    }
`;

export const Select = ({ maxWidth, width, ...props }: SelectProps) => {
    return (
        <StyledSelect
            style={{ maxWidth, width }}
            styles={{
                dropdown: {
                    background: 'var(--theme-dropdown-menu-bg)',
                    filter: 'drop-shadow(0 0 5px rgb(0, 0, 0, 20%))',
                },
                input: {
                    background: 'var(--theme-input-bg)',
                    color: 'var(--theme-input-fg)',
                },
                item: {
                    '&:hover': {
                        background: 'var(--theme-dropdown-menu-bg-hover)',
                    },
                    '&[data-hovered]': {
                        background: 'var(--theme-dropdown-menu-bg-hover)',
                    },
                    '&[data-selected="true"]': {
                        '&:hover': {
                            background: 'var(--theme-dropdown-menu-bg-hover)',
                        },
                        background: 'none',
                        color: 'var(--theme-primary-color)',
                    },
                    color: 'var(--theme-dropdown-menu-fg)',
                    padding: '.3rem',
                },
            }}
            transitionProps={{ duration: 100, transition: 'fade' }}
            withinPortal
            {...props}
        />
    );
};

const StyledMultiSelect = styled(MantineMultiSelect)`
    & [data-selected='true'] {
        background: var(--theme-input-select-bg);
    }

    & [data-disabled='true'] {
        background: var(--theme-input-bg);
        opacity: 0.6;
    }

    & .mantine-MultiSelect-itemsWrapper {
        & .mantine-Select-item {
            padding: 40px;
        }
    }
`;

export const MultiSelect = ({ maxWidth, width, ...props }: MultiSelectProps) => {
    return (
        <StyledMultiSelect
            style={{ maxWidth, width }}
            styles={{
                dropdown: {
                    background: 'var(--theme-dropdown-menu-bg)',
                    filter: 'drop-shadow(0 0 5px rgb(0, 0, 0, 20%))',
                },
                input: {
                    background: 'var(--theme-input-bg)',
                    color: 'var(--theme-input-fg)',
                },
                item: {
                    '&:hover': {
                        background: 'var(--theme-dropdown-menu-bg-hover)',
                    },
                    '&[data-hovered]': {
                        background: 'var(--theme-dropdown-menu-bg-hover)',
                    },
                    '&[data-selected="true"]': {
                        '&:hover': {
                            background: 'var(--theme-dropdown-menu-bg-hover)',
                        },
                        background: 'none',
                        color: 'var(--theme-primary-color)',
                    },
                    color: 'var(--theme-dropdown-menu-fg)',
                    padding: '.5rem .1rem',
                },
                value: {
                    margin: '.2rem',
                    paddingBottom: '1rem',
                    paddingLeft: '1rem',
                    paddingTop: '1rem',
                },
            }}
            transitionProps={{ duration: 100, transition: 'fade' }}
            withinPortal
            {...props}
        />
    );
};
