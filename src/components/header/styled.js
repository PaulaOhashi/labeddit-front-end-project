import styled from "styled-components"
import { theme } from "../../styles"

export const HeaderStyled = styled.header`
    height: 10vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: ${theme.colors.cinza["500"]}; 
    position: relative;
`
export const LogoImage = styled.img`
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
   /*  width: 100%;
    display: flex;
    justify-content: center; */
`

export const CloseIcon = styled.img`
    width: 25px;
    color: #A3A3A3;
`

export const LogoutButton = styled.button`
    color: #4088CB;
    font-size: 18px;
    font-weight: 500;
    outline: none;
    border: none;

    &:last-child {
      margin-left: auto;
    }

    &:hover {
      cursor: pointer;
    } 
`