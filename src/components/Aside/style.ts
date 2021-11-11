import styled from 'styled-components'

export const Container = styled.div`
    grid-area: AS;
    background-color: var(--secondary);
    color: var(--white);
    padding: 0 20px;
    border-right: 1px solid var(--gray);
    display: flex;
    flex-direction: column;
    gap: 50px;
`

export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
    gap: 10px;
`

export const Title = styled.h3`
    color: var(--white);
`

export const LogoImg = styled.img`
    height: 40px;
`

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const MenuItemLink = styled.a`
    color: var(--info);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;

    &:hover {
        opacity: 0.7;
        cursor: pointer;
        transition: opacity .3s;
    }
`
