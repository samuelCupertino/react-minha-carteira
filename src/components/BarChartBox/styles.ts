import styled, { keyframes } from 'styled-components'

interface ILegendProps {
    varColor: string
}

const animFadeInRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(100px);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
`

export const Container = styled.div`
    grid-column: span 3;
    display: flex;
    gap: 5px;
    background-color: var(--tertiary);
    color: var(--white);
    border-radius: 8px;
    padding: 20px;
    animation: ${animFadeInRight} 1s;

    @media (max-width: 991px) {
        flex-direction: column;
    }

    @media (max-width: 575px) {
        grid-column: 1 / -1;
        flex-direction: row;
    }
`

export const SideLeft = styled.div`
    width: 100%;

    > h2 {
        margin-bottom: 20px;
    }
`

export const LegendContainer = styled.ul`
    list-style: none;
    max-height: 150px;
    overflow-y: scroll;
`

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 10px;
    
    > div {
        background-color: var(${props => props.varColor});
        padding: 10px;
        border-radius: 4px;
    }
`

export const SideRight = styled.div`
    width: 100%;
    min-height: 250px;
`
