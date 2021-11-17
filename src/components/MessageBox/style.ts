import styled from 'styled-components'

export const Container = styled.div`
    grid-column: span 3;
    color: var(--white);
    background-color: var(--tertiary);
    border-radius: 8px;
    padding: 30px 20px;

    > header {
        display: flex;
        gap: 10px;
        align-items: center;

        > h4 {
            font-size: 18pt;
        }
        > img {
            width: 30px;
        }
    }

    > p {
        font-size: 12pt;
        margin: 5px 0 50px 0;
    }

    > footer {
        font-size: 12pt;
    }


`
