import styled, { keyframes } from 'styled-components'

interface ILegendProps {
    varColor: string
}

const animFadeInLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-100px);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
`

export const Container = styled.div`
    grid-column: span 6;
    height: 300px;
    background-color: var(--tertiary);
    color: var(--white);
    padding: 20px 20px 45px 20px;
    border-radius: 8px;
    animation: ${animFadeInLeft} 1s;

    svg {
        padding: 5px;
    }

    @media (max-width: 575px) {
        padding-bottom: 75px;
    }
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;

    > h2 {
        margin-bottom: 10px;
    }

    @media (max-width: 575px) {
        flex-direction: column;
    }
`

export const LegendContainer = styled.ul`
    list-style: none;
    display: flex;
    gap: 20px;

    @media (max-width: 575px) {
        justify-content: right;
    }
`

export const Legend = styled.li<ILegendProps>`
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;

    &::before {
        content: '';
        display: inline-block;
        height: 30px;
        width: 50px;
        background-color: var(${props => props.varColor});
        border-radius: 5px;
    }
`