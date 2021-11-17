import styled from 'styled-components'

export const Container = styled.div`
    grid-area: CT;
    background-color: var(--primary);
    color: var(--white);
    display: flex;
    flex-direction: column;
    gap: 25px;
`

export const Content = styled.div`
    display: grid;
    gap: 25px;
    /* grid-template-columns: repeat(auto-fill, minmax(min(100%, 250px), 1fr)); */
    grid-template-columns: repeat(6, 1fr);

    /* display: flex;
    flex-wrap: wrap;
    justify-content: space-between; */
`
