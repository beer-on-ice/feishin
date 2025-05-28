import type { DatePickerProps as MantineDatePickerProps } from '@mantine/dates';

import { DatePicker as MantineDatePicker } from '@mantine/dates';
import styled from 'styled-components';

interface DatePickerProps extends MantineDatePickerProps {
    maxWidth?: number | string;
    width?: number | string;
}

const StyledDatePicker = styled(MantineDatePicker)<DatePickerProps>`
    & .mantine-DatePicker-input {
        color: var(--ui-input-fg);
        background: var(--ui-input-bg);

        &::placeholder {
            color: var(--ui-input-placeholder-fg);
        }
    }

    & .mantine-DatePicker-icon {
        color: var(--ui-input-placeholder-fg);
    }

    & .mantine-DatePicker-required {
        color: var(--ui-secondary-color);
    }

    & .mantine-DatePicker-label {
        font-family: var(--ui-label-font-family);
    }

    & .mantine-DateRangePicker-disabled {
        opacity: 0.6;
    }
`;

export const DatePicker = ({ maxWidth, width, ...props }: DatePickerProps) => {
    return (
        <StyledDatePicker
            {...props}
            style={{ maxWidth, width }}
        />
    );
};
