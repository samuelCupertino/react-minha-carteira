import styled from 'styled-components'

interface ITitleContainerProps{
    varColor: string
}

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 425px) {
        flex-direction: column;
        gap: 20px;
        align-items: flex-start;
    }
`

export const TitleContainer = styled.div<ITitleContainerProps>`

    > h1 {
        color: var(--white);
        
        &::after {
            content: '';
            display: block;
            width: 55px;
            height: 10px;
            background-color: var(${props => props.varColor});
        }
    }
`

export const Controllers = styled.div`
    display: flex;
    gap: 10px;
`