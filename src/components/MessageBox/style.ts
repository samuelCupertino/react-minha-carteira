import styled, { keyframes } from 'styled-components'


const animFadeInRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
`

export const Container = styled.div`
    grid-column: span 3;
    color: var(--white);
    background-color: var(--tertiary);
    border-radius: 8px;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    animation: ${animFadeInRight} 1s;

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


    @media (max-width: 575px) {
        grid-column: 1 / -1;
    }

`
