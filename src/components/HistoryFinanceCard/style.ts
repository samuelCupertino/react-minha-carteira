import styled from 'styled-components'

interface IContainerProps {
    tagColor: string
}

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
        background-color: ${props => props.tagColor};
    }
`