import React from "react";
import styled from 'styled-components/macro';
import imageface1 from '../assets/woman1.jpg';
import imageface2 from '../assets/woman2.jpg';
import imageface3 from '../assets/man1.jpg';

const Header = () => {
    return (
      <HeaderParent>
        <HeadLeft>
            <h5>Education for everyone</h5>
            <h2>Innovative Language Academic Platform for Your Career</h2>
            <ImageAndTextBox>
                <ImageDiv>
                    <StyledImgFace src={imageface2} alt="Woman" />
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
            <p>szdsx</p>
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
border: 1px red solid;
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
`
// https://stackoverflow.com/questions/14993875/css3-circular-image-not-working //

const HeadRight = styled.div`
grid-area: 1 / 2 / 2 / 3; 
border: 1px red solid;
`