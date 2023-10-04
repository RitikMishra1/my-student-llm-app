import styled, { createGlobalStyle, keyframes } from 'styled-components';


// Global Style
export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.background};
    animation: gradient 10s ease infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;


// Container with subtle animation
const containerAnimation = keyframes`
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  animation: ${containerAnimation} 2s ease-out;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  background-color: #ffffff;
  background: linear-gradient(to bottom, #ffffff, #f4f4f4);
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 3px solid ${({ theme }) => theme.borderColor};  // New
  margin: 15px ${({ theme }) => theme.marginColor};  // New
`;


// Heading with text animation
const textGlow = keyframes`
  0% {
    text-shadow: none;
  }
  50% {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #007bff, 0 0 40px #007bff;
  }
  100% {
    text-shadow: none;
  }
`;

export const Heading = styled.h1`
  animation: ${textGlow} 3s infinite alternate;
  font-size: 2.5rem;
  color: #007bff;
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px #000000;
  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }
`;


export const SubHeading = styled.h2`
  animation: ${textGlow} 3s infinite alternate;
  font-size: 1.8rem;
  color: #28a745;
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 1px 1px 2px #000000;
`;


export const InfoText = styled.p`
font-size: 1rem;
color: #333;
text-align: center;
margin-bottom: 20px;
`;

export const MissionStatement = styled.div`
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
  text-align: center;
  background-color: #c8e6c9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  // Added box-shadow
  &:hover {
    background-color: #a5d6a7;
  }
`;

export const VisionStatement = styled.div`
padding: 20px;
border-radius: 10px;
margin: 20px 0;
text-align: center;
background-color: #ffe0b2;
&:hover {
  background-color: #ffcc80;
}
`;

export const ProductList = styled.div`
display: flex;
flex-wrap: wrap;
gap: 20px;
justify-content: center;
`;

// ProductItem with flip animation
const flip = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;

export const ProductItem = styled.div`
  &:hover {
    animation: ${flip} 1s ease-in-out;
  }
  border: 2px solid ${({ theme }) => theme.productBorderColor};  // New
  padding: 15px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.productBackground};  // New

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    border: 2px solid #28a745;
    background-color: #e6f7ff;
  }
`;

export const ProductIcon = styled.img`
width: 100px;
height: 100px;
`;

export const ProductName = styled.p`
margin-top: 15px;
font-weight: bold;
color: #007bff;
`;

export const ProductDescription = styled.p`
font-size: 0.8rem;
color: #555;
text-align: center;
margin-top: 5px;
`;



export const ProductDetail = styled.div`
background-color: #fff;
padding: 20px;
border-radius: 10px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
margin-top: 20px;
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin: 20px 0;
  border-radius: 5px;
  &:focus {
    border-color: #007bff;  // Added focus effect
    box-shadow: 0 0 5px rgba(0,123,255,0.5);  // Added focus effect
  }
`;



export const SearchResults = styled.div`
  position: absolute;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #ccc;
  background-color: #fff;
  z-index: 1;
`;

// Themes with new properties
export const lightTheme = {
  background: 'linear-gradient(to left, #ff9966, #ff5e62)',
  borderColor: '#007bff',
  marginColor: '#f1f1f1',
  productBorderColor: '#007bff',
  productBackground: '#f1f1f1',
};

export const darkTheme = {
  background: 'linear-gradient(to left, #343a40, #212529)',
  borderColor: '#28a745',
  marginColor: '#343a40',
  productBorderColor: '#28a745',
  productBackground: '#343a40',
};

