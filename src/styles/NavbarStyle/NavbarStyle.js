import styled from 'styled-components'


export const NavbarDiv = styled.div`
    width: auto;
    height: 10vh;
    background-color: gray;
    display: flex;
    padding-left: 30%;
`;

export const NavbarLogo = styled.span`
    width:150px;
    height:150px;
    font-size:42px;
`;

export const NavbarList = styled.div`
    display: flex;
    flex-direction: row;
    color:black;
    margin-left: 200px;
`;

export const NavbarUl = styled.ul`
    list-style-type:none;
    display: flex;
    font-size: 22px;
`;

export const NavbarLi = styled.li`
    padding: 10px;
    font-weight: bold;
    &:hover{
        color:white;
        border-bottom: 3px solid green;
        border-radius: 2px;
    }
`;

