import React from "react";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

const Nav = () => {
    return (
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
    )
}

export default Nav;

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