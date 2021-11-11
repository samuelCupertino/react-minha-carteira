import styled from 'styled-components'

export const Container = styled.div`
    grid-area: CT;
    background-color: var(--primary);
    color: var(--white);
    padding: 25px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--secondary);
        border-radius: 5px;
    }
    ::-webkit-scrollbar-track {
        background-color: var(--tertiary);
        border-radius: 5px;
    }

`
