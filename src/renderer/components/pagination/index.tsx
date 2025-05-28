import {
    Pagination as MantinePagination,
    PaginationProps as MantinePaginationProps,
} from '@mantine/core';
import styled from 'styled-components';

const StyledPagination = styled(MantinePagination)<PaginationProps>`
    & .mantine-Pagination-item {
        color: var(--theme-btn-default-fg);
        background-color: var(--theme-btn-default-bg);
        border: none;
        transition:
            background 0.2s ease-in-out,
            color 0.2s ease-in-out;

        &[data-active] {
            color: var(--theme-btn-primary-fg);
            background-color: var(--theme-btn-primary-bg);
        }

        &[data-dots] {
            display: ${({ $hideDividers }) => ($hideDividers ? 'none' : 'block')};
            background-color: transparent;
        }

        &:hover {
            color: var(--theme-btn-default-fg-hover);
            background-color: var(--theme-btn-default-bg-hover);

            &[data-active] {
                color: var(--theme-btn-primary-fg-hover);
                background-color: var(--theme-btn-primary-bg-hover);
            }

            &[data-dots] {
                background-color: transparent;
            }
        }
    }
`;

interface PaginationProps extends MantinePaginationProps {
    $hideDividers?: boolean;
}

export const Pagination = ({ $hideDividers, ...props }: PaginationProps) => {
    return (
        <StyledPagination
            $hideDividers={$hideDividers}
            radius="xl"
            {...props}
        />
    );
};
