import styled, { css } from 'styled-components'

interface IContainerProps {
    isOpen: boolean
}

export const Container = styled.div<IContainerProps>`
    grid-area: AS;
    background-color: var(--secondary);
    color: var(--white);
    padding: 0 20px;
    border-right: 1px solid var(--gray);
    display: flex;
    flex-direction: column;
    gap: 50px;
    min-width: 220px;
    transition: height 1s;

    @media (max-width: 767px) {
        position: fixed;
        z-index: 1;
        overflow: hidden;
        height: 100%;
        
        header {
            min-height: 70px;
            
            img {
                display: none;
            }
        }

        footer {
            display: flex;
        }

        ${props => (!props.isOpen && css` 
            height: 70px;
            border: none;
            border-bottom: 1px solid var(--gray);

            footer {
                display: flex;
            }
        `)};
    }

    @media (max-width: 576px) {
        min-width: 185px;
        
        header h3 {
            display: none;
        }            
    }

`

export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
    gap: 10px;
`

export const ToggleMenu = styled.button`
    display: none;
    background-color: transparent;

    svg {
        border-radius: 8px;
        background-color: var(--warning);
        color: var(--primary);
        width: 40px;
        height: 40px;
        padding: 8px;
        cursor: pointer;
        transition: opacity 0.3s;

        &:hover {
            opacity: 0.7;
        }
    }


    @media (max-width: 767px) {
        display: flex;
    }
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

export const MenuItemButton = styled.button`
    color: var(--info);
    background-color: transparent;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12pt;

    &:hover {
        opacity: 0.7;
        cursor: pointer;
        transition: opacity .3s;
    }
`

export const Footer = styled.footer`
    display: none;
    flex: 1;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 20px;
    background-color: transparent;
`
