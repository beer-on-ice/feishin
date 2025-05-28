import { rem, Slider, SliderProps } from '@mantine/core';

export const PlayerbarSlider = ({ ...props }: SliderProps) => {
    return (
        <Slider
            styles={{
                bar: {
                    backgroundColor: 'var(--theme-playerbar-slider-track-progress-bg)',
                    transition: 'background-color 0.2s ease',
                },
                label: {
                    backgroundColor: 'var(--theme-tooltip-bg)',
                    color: 'var(--theme-tooltip-fg)',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    padding: '0 1rem',
                },
                root: {
                    '&:hover': {
                        '& .mantine-Slider-bar': {
                            backgroundColor: 'var(--theme-primary-color)',
                        },
                        '& .mantine-Slider-thumb': {
                            opacity: 1,
                        },
                    },
                },
                thumb: {
                    backgroundColor: 'var(--theme-slider-thumb-bg)',
                    borderColor: 'var(--theme-primary-color)',
                    borderWidth: rem(1),
                    height: '1rem',
                    opacity: 0,
                    width: '1rem',
                },
                track: {
                    '&::before': {
                        backgroundColor: 'var(--theme-playerbar-slider-track-bg)',
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
