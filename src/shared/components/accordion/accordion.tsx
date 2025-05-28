import { Accordion as MantineAccordion } from '@mantine/core';
import { ReactNode } from 'react';

import styles from './accordion.module.css';

import { ComponentRadius } from '/@/shared/components/components-types';

interface AccordionProps {
    chevron?: ReactNode;
    chevronPosition?: 'left' | 'right';
    chevronSize?: number | string;
    children: ReactNode;
    defaultValue?: null | string | string[];
    disableChevronRotation?: boolean;
    loop?: boolean;
    multiple?: boolean;
    onChange?: (value: null | string | string[]) => void;
    order?: 2 | 3 | 4 | 5 | 6;
    radius?: ComponentRadius;
    transitionDuration?: number;
    value?: null | string | string[];
}

export const Accordion = ({ children, ...props }: AccordionProps) => {
    return (
        <MantineAccordion
            {...props}
            classNames={{ control: styles.control, panel: styles.panel }}
        >
            {children}
        </MantineAccordion>
    );
};

Accordion.Control = MantineAccordion.Control;
Accordion.Item = MantineAccordion.Item;
Accordion.Panel = MantineAccordion.Panel;
