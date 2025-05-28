import { rem, Slider, SliderProps } from '@mantine/core';

export const PlayerbarSlider = ({ ...props }: SliderProps) => {
    return (
        <Slider
            styles={{
                bar: {
                    backgroundColor: 'var(--ui-playerbar-slider-track-progress-bg)',
                    transition: 'background-color 0.2s ease',
                },
                label: {
                    backgroundColor: 'var(--ui-tooltip-bg)',
                    color: 'var(--ui-tooltip-fg)',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    padding: '0 1rem',
                },
                root: {
                    '&:hover': {
                        '& .mantine-Slider-bar': {
                            backgroundColor: 'var(--ui-primary-color)',
                        },
                        '& .mantine-Slider-thumb': {
                            opacity: 1,
                        },
                    },
                },
                thumb: {
                    backgroundColor: 'var(--ui-slider-thumb-bg)',
                    borderColor: 'var(--ui-primary-color)',
                    borderWidth: rem(1),
                    height: '1rem',
                    opacity: 0,
                    width: '1rem',
                },
                track: {
                    '&::before': {
                        backgroundColor: 'var(--ui-playerbar-slider-track-bg)',
                        right: 'calc(0.1rem * -1)',
                    },
                },
            }}
            {...props}
            onClick={(e) => {
                e?.stopPropagation();
            }}
        />
    );
};
