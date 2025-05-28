import type { SegmentedControlProps as MantineSegmentedControlProps } from '@mantine/core';

import { SegmentedControl as MantineSegmentedControl } from '@mantine/core';
import { forwardRef } from 'react';
import styled from 'styled-components';

type SegmentedControlProps = MantineSegmentedControlProps;

const StyledSegmentedControl = styled(MantineSegmentedControl)<MantineSegmentedControlProps>`
    & .mantine-SegmentedControl-label {
        font-family: var(--global-content-font-family);
        color: var(--theme-input-fg);
    }

    background-color: var(--theme-input-bg);

    & .mantine-SegmentedControl-disabled {
        opacity: 0.6;
    }

    & [data-disabled='true'] {
        opacity: 0.6;
    }

    & .mantine-SegmentedControl-active {
        color: var(--theme-input-active-fg);
        background-color: var(--theme-input-active-bg);
    }
`;

export const SegmentedControl = forwardRef<HTMLDivElement, SegmentedControlProps>(
    ({ ...props }: SegmentedControlProps, ref) => {
        return (
            <StyledSegmentedControl
                ref={ref}
                styles={{}}
                transitionDuration={250}
                transitionTimingFunction="linear"
                {...props}
            />
        );
    },
);
