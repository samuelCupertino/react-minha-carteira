import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* flex: 1; */
    gap: 25px;
    background-color: var(--primary);
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    padding: 0 10px;
    gap: 5px;
    color: var(--white);

    > img {
        height: 40px;
    }
`

export const Form = styled.form`
    width: clamp(125px, 90vw, 300px);
    display: flex;
    flex-direction: column;
    gap: 15px;
    background-color: var(--tertiary);
    padding: 20px;
    border-radius: 10px;
`

export const FormTitle = styled.h1`
    margin-bottom: 25px;
    color: var(--white);

    &::after {
        content: '';
        display: block;
        width: 50px;
        height: 5px;
        background-color: var(--warning);
    }
`