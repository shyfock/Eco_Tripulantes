import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav `
    background: #DCEDC8;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5 calc((100vw -100px) / 2);
    z-index: 10;
`;

export const NavLink = styled(Link)`
    color: #4F9D9F;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    
    &.active {
        color: #004D40 ;
  }
`;


export const Bars = styled(FaBars)`
    display: none;
    color: #f3dbc3;
    
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
  }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
    
    @media screen and (max-width: 768px) {
        display: none;
  }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    
    @media screen and (max-width: 768px) {
        display: none;
  }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #F5DABD;
    padding: 10px 22px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 24px;
  
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;