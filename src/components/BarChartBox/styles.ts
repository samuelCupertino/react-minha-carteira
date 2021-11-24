import styled from 'styled-components'

interface ILegendProps {
    varColor: string
}

export const Container = styled.div`
    grid-column: span 3;
    display: flex;
    gap: 5px;
    background-color: var(--tertiary);
    color: var(--white);
    border-radius: 8px;
    padding: 20px;
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
