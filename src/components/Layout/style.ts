import styled from 'styled-components'

export const Grid = styled.div`
    height: 100vh;
    display: grid;
    grid-template-areas: 
        'AS MH'
        'AS CT';
    grid-template-columns: 200px auto;
    grid-template-rows: 40px calc(100% - 40px);
`