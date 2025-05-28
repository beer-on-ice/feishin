import { Command as Cmdk } from 'cmdk';
import styled from 'styled-components';

export enum CommandPalettePages {
    GO_TO = 'go',
    HOME = 'home',
    MANAGE_SERVERS = 'servers',
}

export const Command = styled(Cmdk)`
    [cmdk-root] {
        background-color: var(--theme-background-color);
    }

    input[cmdk-input] {
        width: 100%;
        height: 1.5rem;
        padding: 1.3rem 0.5rem;
        margin-bottom: 1rem;
        font-family: var(--global-content-font-family);
        color: var(--theme-input-fg);
        background: var(--theme-input-bg);
        border: none;
        border-radius: 5px;

        &::placeholder {
            color: var(--theme-input-placeholder-fg);
        }
    }

    [cmdk-group-heading] {
        margin: 1rem 0;
        font-size: 0.9rem;
        opacity: 0.8;
    }

    [cmdk-group-items] {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
    }

    [cmdk-item] {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        padding: 0.5rem;
        font-family: var(--global-content-font-family);
        color: var(--theme-btn-default-fg);
        cursor: pointer;
        background: var(--theme-btn-default-bg);
        border-radius: 5px;

        svg {
            width: 1.2rem;
            height: 1.2rem;
        }

        &[data-selected] {
            color: var(--theme-btn-default-fg-hover);
            background: var(--theme-btn-default-bg-hover);
        }
    }

    [cmdk-separator] {
        height: 1px;
        margin: 0 0 0.5rem;
        background: var(--theme-generic-border-color);
    }
`;
