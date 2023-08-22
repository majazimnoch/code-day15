import React from "react";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import icon from '../assets/menu.png'

const Nav = () => {
    return (
        <>
            <AboveBar>
                <AboveBarTextBox>
                    <Pdesktop>Have any questions?</Pdesktop>
                    <Pdesktop>example@gmail.com</Pdesktop>
                    <Pdesktop>+1-202-555-0174</Pdesktop>
                    <Pmobile>example@gmail.com</Pmobile>
                </AboveBarTextBox>
                <AboveBarFlagBox>
                  <FlagDiv>
                    <CountryFlag
                        alt="United States"
                        src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"/>
                    <p>English</p>
                  </FlagDiv>
                  <CurrencyDiv>
                    <p>USD</p>
                  </CurrencyDiv>
                </AboveBarFlagBox>
            </AboveBar>
            <Bar>
                <HLogo>
                    <NavLink to="/">LOGO</NavLink></HLogo>
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
                <ButtonImgDiv>
                    <ButtonSquare>Join Now</ButtonSquare>
                    <StyledBurger src= {icon} alt="burger menu" />
                </ButtonImgDiv>
            </Bar>
        </>
    )
}

export default Nav;

const AboveBar = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
gap: 1rem;

@media (min-width: 1024px) {
display: flex;
justify-content: space-between;
gap: 2rem;
}
`

const AboveBarTextBox = styled.div`
display: flex;
gap: 2rem;

@media (min-width: 1024px) {
display: flex;
flex-direction: row;
gap: 2rem;
}
`
const Pmobile = styled.p`
font-size: 12px;
@media (min-width: 668px) {
display: none;
}
`
const Pdesktop = styled.p`
font-size: 12px;
@media (max-width: 667px) {
display: none;
}
`

const AboveBarFlagBox = styled.div`
display: flex;
gap: 1rem;
`

const FlagDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 1rem;
`
const CountryFlag = styled.img`
height:20px;
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
align-items: center;
justify-content: space-between;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
padding: 10px 25px;
border-radius: 8px;
`

const ListMenu = styled.div`
display: flex;
flex-direction: row;
gap: 2rem;

@media (max-width: 1023px) {
    display: none;
  }
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
const ButtonSquare = styled.button`
background-image: linear-gradient(to right, #B966E7, #585CED, #B966E7 );
margin: 0px;
padding: 12px 28px;
text-align: center;
text-transform: uppercase;
transition: 0.5s;
background-size: 200% auto;
color: white;            
box-shadow: 0 0 20px ;
border-radius: 10px;
display: block;
border: none;

&:hover {
background-position: right center; 
color: #fff;
text-decoration: none;
}   

@media (min-width: 668px) {
    margin: 10px 0;
padding: 15px 45px;
border-radius: 10px;
  }
`
const ButtonImgDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 2rem;
`

const StyledBurger = styled.img`
height: 30px;
display: flex;
@media (min-width: 1024px) {
display: none;
  }
`

