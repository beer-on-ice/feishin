import type { TooltipProps, UnstyledButtonProps } from '@mantine/core';

import { UnstyledButton } from '@mantine/core';
import { motion } from 'framer-motion';
/* stylelint-disable no-descending-specificity */
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { Tooltip } from '/@/shared/components/tooltip/tooltip';

type MantineButtonProps = ComponentPropsWithoutRef<'button'> & UnstyledButtonProps;
interface PlayerButtonProps extends MantineButtonProps {
    $isActive?: boolean;
    icon: ReactNode;
    tooltip?: Omit<TooltipProps, 'children'>;
    variant: 'main' | 'secondary' | 'tertiary';
}

const WrapperMainVariant = css`
    margin: 0 0.5rem;
`;

type MotionWrapperProps = { variant: PlayerButtonProps['variant'] };

const MotionWrapper = styled(motion.div)<MotionWrapperProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ variant }) => variant === 'main' && WrapperMainVariant};
`;

const ButtonMainVariant = css`
    padding: 0.5rem;
    background: var(--ui-playerbar-btn-main-bg);
    border-radius: 50%;

    svg {
        display: flex;
        fill: var(--ui-playerbar-btn-main-fg);
    }

    &:focus-visible {
        background: var(--ui-playerbar-btn-main-bg-hover);
    }

    &:hover {
        background: var(--ui-playerbar-btn-main-bg-hover);

        svg {
            fill: var(--ui-playerbar-btn-main-fg-hover);
        }
    }
`;

const ButtonSecondaryVariant = css`
    padding: 0.5rem;
`;

const ButtonTertiaryVariant = css`
    padding: 0.5rem;

    svg {
        display: flex;
    }

    &:focus-visible {
        svg {
            fill: var(--ui-playerbar-btn-fg-hover);
            stroke: var(--ui-playerbar-btn-fg-hover);
        }
    }
`;

type StyledPlayerButtonProps = Omit<PlayerButtonProps, 'icon'>;

const StyledPlayerButton = styled(UnstyledButton)<StyledPlayerButtonProps>`
    all: unset;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0.5rem;
    overflow: visible;
    cursor: default;
    background: var(--ui-playerbar-btn-bg-hover);

    button {
        display: flex;
    }

    &:focus-visible {
        background: var(--ui-playerbar-btn-bg-hover);
        outline: 1px var(--ui-primary-color) solid;
    }

    &:disabled {
        opacity: 0.5;
    }

    svg {
        display: flex;
        fill: ${({ $isActive }) =>
            $isActive ? 'var(--ui-primary-color)' : 'var(--ui-playerbar-btn-fg)'};
        stroke: var(--ui-playerbar-btn-fg);
    }

    &:hover {
        color: var(--ui-playerbar-btn-fg-hover);
        background: var(--ui-playerbar-btn-bg-hover);

        svg {
            fill: ${({ $isActive }) =>
                $isActive ? 'var(--ui-primary-color)' : 'var(--ui-playerbar-btn-fg-hover)'};
        }
    }

    ${({ variant }) =>
        variant === 'main'
            ? ButtonMainVariant
            : variant === 'secondary'
              ? ButtonSecondaryVariant
              : ButtonTertiaryVariant};
`;

export const PlayerButton = forwardRef<HTMLDivElement, PlayerButtonProps>(
    ({ icon, tooltip, variant, ...rest }: PlayerButtonProps, ref) => {
        if (tooltip) {
            return (
                <Tooltip {...tooltip}>
                    <MotionWrapper
                        ref={ref}
                        variant={variant}
                    >
                        <StyledPlayerButton
                            variant={variant}
                            {...rest}
                            onClick={(e) => {
                                e.stopPropagation();
                                rest.onClick?.(e);
                            }}
                        >
                            {icon}
                        </StyledPlayerButton>
                    </MotionWrapper>
                </Tooltip>
            );
        }

        return (
            <MotionWrapper
                ref={ref}
                variant={variant}
            >
                <StyledPlayerButton
                    variant={variant}
                    {...rest}
                    onClick={(e) => {
                        e.stopPropagation();
                        rest.onClick?.(e);
                    }}
                >
                    {icon}
                </StyledPlayerButton>
            </MotionWrapper>
        );
    },
);
