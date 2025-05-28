import { Tooltip as MantineTooltip } from '@mantine/core';
import { ReactNode } from 'react';

import styles from './tooltip.module.css';

import { ComponentArrowPosition, ComponentRadius } from '/@/shared/components/components-types';

interface TooltipProps {
    arrowOffset?: number;
    arrowPosition?: ComponentArrowPosition;
    children: ReactNode;
    label: ReactNode;
    multiline?: boolean;
    radius?: ComponentRadius;
    transitionDuration?: number;
    transitionType?: 'fade' | 'slide-down' | 'slide-left' | 'slide-right' | 'slide-up';
    withinPortal?: boolean;
}

export const Tooltip = ({
    children,
    transitionDuration = 250,
    transitionType = 'fade',
    withinPortal = true,
    ...props
}: TooltipProps) => {
    return (
        <MantineTooltip
            classNames={{
                tooltip: styles.tooltip,
            }}
            multiline
            transitionProps={{
                duration: transitionDuration,
                transition: transitionType,
            }}
            withinPortal={withinPortal}
            {...props}
        >
            {children}
        </MantineTooltip>
    );
};
