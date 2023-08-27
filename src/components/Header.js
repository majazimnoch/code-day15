import React from "react";
import styled from 'styled-components/macro';
import imageface1 from '../assets/woman1.jpg';
import imageface2 from '../assets/woman2.jpg';
import imageface3 from '../assets/man1.jpg';
import image4 from '../assets/happywoman.jpg';
import image5 from '../assets/happywoman2.jpg';
import image6 from '../assets/happyman.jpg';

const Header = () => {
    return (
      <HeaderParent>
        <HeadLeft>
            <H5Header>Education for everyone</H5Header>
            <H2Header>Innovative <RainbowSpan>Language Academic</RainbowSpan> Platform for Your Career</H2Header>
            <ImageAndTextBox>
                <ImageDiv>
                    <StyledImgFace src={imageface1} alt="Woman" />
                    <StyledImgFace src={imageface3} alt="Man" />
                    <StyledImgFace src={imageface2} alt="Woman" />
                </ImageDiv> 
                <div>
                    <p>Join Over 3000+ Students</p>
                    <p> Have new ideas every week</p>
                </div>
            </ImageAndTextBox>
            <div>
                <button>Sign Up Now</button>
                <button>Find courses</button>
            </div>
        </HeadLeft>
        <HeadRight>
            <HeaderGridContainer>
                <HeaderPicture1 />
                <HeaderPicture2 />
                <HeaderPicture3 />
            </HeaderGridContainer>
        </HeadRight>
      </HeaderParent>
    )
}

export default Header;

const HeaderParent = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
`

const HeadLeft = styled.div`
grid-area: 1 / 1 / 2 / 2;
margin: 20px 40px;
`

const H5Header = styled.h5`
background-color: #E0E5FD;
display:inline-block;
flex-direction: column;
border-radius: 20px;
padding: 8px 15px;
text-transform: uppercase;
color: #5D7BF3;
`
const H2Header = styled.h2`
font-size: 40px;
color: #192335;
`

const RainbowSpan = styled.span`
background-image: linear-gradient(to right, #B966E7, #585CED, #B966E7);
-webkit-background-clip: text;
color: transparent;
`

const ImageAndTextBox = styled.div`
display: flex;
flex-direction: row;
`

const ImageDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-left:.8rem; 
`
const StyledImgFace = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px beige solid;
  margin-left: -.8rem;
  display: block;
  background-size: cover;
`

const HeadRight = styled.div`
grid-area: 1 / 2 / 2 / 3; 
`

const HeaderGridContainer = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 20px;
  margin-top: 20px;
`

const HeaderPicture = styled.div`
  width: 100%;
  min-height: 250px;
  background-size: cover;
  border-radius: 10px;
`

const HeaderPicture1 = styled(HeaderPicture)`
  grid-column: 1;
  grid-row: 1 / span 2;
  background-image: url(${image4});
  margin: 50px 0;
  background-size: cover;
  background-position: top -110px left 0px;
`

const HeaderPicture2 = styled(HeaderPicture)`
 grid-column: 2;
  grid-row: 1;
  background-image: url(${image5});
  width: 60%;
`

const HeaderPicture3 = styled(HeaderPicture)`
  grid-column: 2;
  grid-row: 2;
  background-image: url(${image6});
  background-size: cover;
`