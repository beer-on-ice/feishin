import { createPolymorphicComponent, Badge as MantineBadge } from '@mantine/core';
import { ReactNode } from 'react';

import styles from './badge.module.css';

import { ComponentRadius, ComponentSize } from '/@/shared/components/components-types';

export interface BadgeProps {
    autoContrast?: boolean;
    children: ReactNode;
    circle?: boolean;
    color?: string;
    fullWidth?: boolean;
    leftSection?: ReactNode;
    radius?: ComponentRadius;
    rightSection?: ReactNode;
    size?: ComponentSize;
    variant?: 'default' | 'filled' | 'outline' | 'transparent';
}

const _Badge = ({ children, variant = 'default', ...props }: BadgeProps) => {
    return (
        <MantineBadge
            classNames={{ root: styles.root }}
            variant={variant}
            {...props}
        >
            {children}
        </MantineBadge>
    );
};

export const Badge = createPolymorphicComponent<'button', BadgeProps>(_Badge);
