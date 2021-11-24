import styled from 'styled-components'

interface ILegendProps {
    varColor: string
}

export const Container = styled.div`
    grid-column: span 6;
    height: 300px;
    background-color: var(--tertiary);
    color: var(--white);
    padding: 20px 20px 50px 20px;
    border-radius: 8px;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;

    > h2 {
        margin-bottom: 10px;
    }
`

export const LegendContainer = styled.ul`
    list-style: none;
    display: flex;
    gap: 20px;
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