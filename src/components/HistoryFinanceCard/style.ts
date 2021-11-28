import styled, { keyframes } from 'styled-components'

interface IContainerProps {
    tagVarColor: string
}

const animFadeInLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
`

export const Container = styled.li<IContainerProps>`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    border-radius: 5px;
    padding: 12px 25px;
    background-color: var(--tertiary);
    cursor: pointer;
    transition: all .3s;
    animation: ${animFadeInLeft} .3s;

    &:hover {
        opacity: .7;
        transform: translateX(10px);
    }

    &::before {
        content: '';
        width: 10px;
        height: 60%;
        position: absolute;
        left: 0;
        background-color: var(${props => props.tagVarColor});
    }
`