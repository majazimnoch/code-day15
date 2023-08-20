import React from "react";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

const Nav = () => {
    return (
        <>
            <AboveBar>
                <AboveBarTextBox>
                    <p>Have any questions</p>
                    <p>example@gmail.com</p>
                    <p>+1-202-555-0174</p>
                </AboveBarTextBox>
                <AboveBarFlagBox>
                  <FlagDiv>
                    <img></img>
                    <p>English</p>
                  </FlagDiv>
                  <CurrencyDiv>
                    <p>USD</p>
                  </CurrencyDiv>
                </AboveBarFlagBox>
            </AboveBar>
            <Bar>
                <HLogo>
                    <NavLink to="/">Project name</NavLink></HLogo>
                <ListMenu>
                    <SingleLinkNavbar>
                        <StyledNavLink to="/home">Home</StyledNavLink>
                    </SingleLinkNavbar>
                    <SingleLinkNavbar>
                        <StyledNavLink to="/courses">Courses</StyledNavLink>
                    </SingleLinkNavbar>
                    <SingleLinkNavbar>
                        <StyledNavLink to="/dashboard">Dashboard</StyledNavLink>
                    </SingleLinkNavbar>
                    <SingleLinkNavbar>
                        <StyledNavLink to="/pages">Pages</StyledNavLink>
                    </SingleLinkNavbar>
                    <SingleLinkNavbar>
                        <StyledNavLink to="/elements">Elements</StyledNavLink>
                    </SingleLinkNavbar>
                    <SingleLinkNavbar>
                        <StyledNavLink to="/blog">Blog</StyledNavLink>
                    </SingleLinkNavbar>
                </ListMenu>
                <button>Join Now</button>
            </Bar>
        </>
    )
}

export default Nav;

const AboveBar = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
gap: 2rem;
`

const AboveBarTextBox = styled.div`
display: flex;
flex-direction: row;
gap: 2rem;
`

const AboveBarFlagBox = styled.div`
display: flex;
gap: 1rem;
`

const FlagDiv = styled.div`
display: flex;
flex-direction: row;
gap: 1rem;
`

const CurrencyDiv = styled.div`
display: flex;

`

const HLogo = styled.h1`
font-size: 22px;
font-weight: 800;
text-transform: uppercase;
`

const Bar = styled.nav`
display: flex;
flex-direction: row;
justify-content: space-between;
border: 1px red solid;
`

const ListMenu = styled.ul`
display: flex;
flex-direction: row;
gap: 2rem;
`
const SingleLinkNavbar = styled.li`
list-style-type: none;
`
const StyledNavLink = styled(NavLink)`
text-decoration: none;

&:hover{
color: green;
}
&:active {
text-decoration: underline;
}
&:after {
color: beige;
list-style-type: none;
}
`