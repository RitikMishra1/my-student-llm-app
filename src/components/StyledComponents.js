import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

// Global Style
export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.background};
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  background-color: #ffffff;
  background: linear-gradient(to bottom, #ffffff, #f4f4f4);
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 3px solid ${({ theme }) => theme.borderColor};
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primaryText};
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px #000000;
`;

export const SubHeading = styled.h2`
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const VisionStatement = styled.div`
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
  text-align: center;
  background-color: #ffe0b2;
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin: 20px 0;
  border-radius: 5px;
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0,123,255,0.5);
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

export const ContentBox = styled.div`
  background-color: ${({ theme }) => theme.contentBoxBackground};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;

  h2 {
    margin-bottom: 10px;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.primaryText};
  }

  p {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.secondaryText};
  }
`;

export const ToggleContainer = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  padding: 10px;
  background-color: ${({ theme }) => theme.toggleBackground};
  border-radius: 25px;
  z-index: 1000;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
`;

export const SunIcon = styled(FontAwesomeIcon).attrs({ icon: faSun, size: "2x" })`
  cursor: pointer;
`;

export const MoonIcon = styled(FontAwesomeIcon).attrs({ icon: faMoon, size: "2x" })`
  cursor: pointer;
`;


export const ProductDetail = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

export const ProductDescription = styled.p`
  font-size: 0.8rem;
  color: #555;
  text-align: center;
  margin-top: 5px;
`;

export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const ProductItem = styled.div`
  border: 2px solid ${({ theme }) => theme.productBorderColor};
  padding: 15px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.productBackground};

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
export const PluginContainer = styled.div`
    width: 30%;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const PluginButton = styled.button`
    background-color: #007bff;
    color: #fff;
    padding: 8px 16px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;

export const TestimonialContainer = styled.div`
    width: 45%;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

