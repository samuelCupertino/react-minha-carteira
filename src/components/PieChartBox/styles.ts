import styled, { keyframes } from 'styled-components'

interface ILegendProps {
    varColor: string
}

const animFadeInRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
`

export const Container = styled.div`
    grid-column: span 3;
    background-color: var(--tertiary);
    color: var(--white);
    border-radius: 8px;
    display: flex;
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
    padding: 20px;

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
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
