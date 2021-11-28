import styled, { keyframes } from 'styled-components'

interface IConatainerProps {
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

export const Container = styled.div<IConatainerProps>`
    grid-column: span 2;
    background-color: var(${prop => prop.varColor});
    color: var(--white);
    border-radius: 8px;
    padding: 20px 10px;
    position: relative;
    overflow: hidden;
    animation: ${animFadeInLeft} 1s;

    > img {
        height: 110%;
        position: absolute;
        top: -10px;
        right: -25px;
        opacity: .3;
    }

    > h4 {
        font-size: 18px;
        font-weight: 600;
    }

    > p {
        font-size: 12px;
        margin-top: 50px;
    }

    @media (max-width: 575px) {
        grid-column: 1 / -1;
    }
    
`
