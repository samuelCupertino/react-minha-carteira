import styled from 'styled-components'

export const Grid = styled.div`
    height: 100vh;
    display: grid;
    grid-template-areas: 
        'AS MH'
        'AS CT';
    grid-template-columns: minmax(auto, 220px) auto;
    grid-template-rows: 70px calc(100% - 70px);
    min-width: 350px;

    @media (max-width: 767px) {
        grid-template-areas:
            'MH'
            'CT';
        grid-template-columns: 100%;
        grid-template-rows: 70px calc(100% - 70px);
    }
`