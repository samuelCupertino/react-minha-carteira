import styled from 'styled-components'

export const Container = styled.div`
    grid-area: CT;
    background-color: var(--primary);
    color: var(--white);
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Content = styled.div`

`

export const Filters = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;

    > button {
        font-size: 14pt;
        font-weight: 500;
        background-color: transparent;
        color: var(--white);
        transition: opacity .3s;

        &:hover {
            opacity: .7;
        }

        &::after {
            content: '';
            display: block;
            width: 55px;
            height: 10px;
            margin: 0 auto;
        }

        &.tag-recurrent::after {
            background-color: var(--warning);
        }

        &.tag-eventual::after {
            background-color: var(--success);
        }
    }

`
