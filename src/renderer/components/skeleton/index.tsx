import type { SkeletonProps as MantineSkeletonProps } from '@mantine/core';

import { Skeleton as MantineSkeleton } from '@mantine/core';
import styled from 'styled-components';

const StyledSkeleton = styled(MantineSkeleton)`
    &::after {
        background: var(--theme-placeholder-bg);
    }
`;

export const Skeleton = ({ ...props }: MantineSkeletonProps) => {
    return (
        <StyledSkeleton
            animate={false}
            {...props}
        />
    );
};
