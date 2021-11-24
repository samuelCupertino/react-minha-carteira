import styled from 'styled-components'

interface ILegendProps {
    varColor: string
}

export const Container = styled.div`
    grid-column: span 3;
    background-color: var(--tertiary);
    color: var(--white);
    border-radius: 8px;

    display: flex;
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
