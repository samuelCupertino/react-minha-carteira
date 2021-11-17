import styled from 'styled-components'

interface IConatainerProps {
    varColor: string
}

export const Container = styled.div<IConatainerProps>`
    grid-column: span 2;
    background-color: var(${prop => prop.varColor});
    color: var(--white);
    border-radius: 8px;
    padding: 20px 10px;
    position: relative;
    overflow: hidden;

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
    
`
