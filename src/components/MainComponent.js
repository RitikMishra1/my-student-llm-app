// React and React-Bootstrap
import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Styled components
import {
  ToggleContainer,
  SunIcon,
  MoonIcon,
  Heading,
  SubHeading,
  InfoText,
  MissionStatement,
  VisionStatement,
  ContentBox
} from './StyledComponents';

// Components
import ProductListComponent from './ProductListComponent';
import ProductDetailComponent from './ProductDetailComponent';
import FeedbackModalComponent from './FeedbackModalComponent';
import Testimonials from './Testimonials.js';
import PluginPreviews from './PluginPreviews';
// import ProductSearchComponent from './ProductSearchComponent';

// Others
import { fetchAllProducts } from '../api/api';
import { ThemeContext } from './ThemeProviderComponent';

const MainComponent = () => {

  // State for managing products, selected product, loading, error, search term, and search results
  const [mergedProducts, setMergedProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { toggleTheme, handleSunClick, handleMoonClick } = useContext(ThemeContext);

  // Fetch all products when the component mounts
  useEffect(() => {
    fetchAllProducts()
      .then((data) => {
        setMergedProducts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);
  

  // Handle search input changes and filter products
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value === '') {
      setSearchResults([]);
      return;
    }
    const filteredProducts = mergedProducts.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filteredProducts);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container>
      <ToggleContainer>
        <SunIcon onClick={handleSunClick} />
        <MoonIcon onClick={handleMoonClick} />
      </ToggleContainer>
      <Row>
        <Col>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <a href="/">
              <img src="/Robot-1.jpeg" alt="Stella Inc. Logo" style={{ width: '100px', height: '100px' }} />
            </a>
            <FeedbackModalComponent />
          </div>
          {/* Header Content */}
          <Heading>Welcome to Stella Inc.'s AI Education</Heading>
          <SubHeading>Empowering Students with AI and AR</SubHeading>
          <InfoText>
            Explore our range of AI tools designed to revolutionize your learning experience. Our products are crafted with a blend of artificial intelligence and augmented reality to provide an immersive learning environment.
          </InfoText>
          <MissionStatement>
            <strong>Mission:</strong> For the students, of the students, by the students.
          </MissionStatement>
          <VisionStatement>
            <strong>Vision:</strong> To be the world's leading platform in AI and AR education.
          </VisionStatement>
  
          {/* Search Section */}

         {/* <ProductSearchComponent products={mergedProducts} setSearchResults={setSearchResults} />  */}

          {/* Product List and Detail */}
            <ProductListComponent products={searchTerm ? searchResults : mergedProducts} setSelectedProduct={setSelectedProduct} />
          {selectedProduct && <ProductDetailComponent product={selectedProduct} />}
  
          {/* Additional Content */}
          <ContentBox>
            <h2>Our Courses</h2>
            <p>Explore our comprehensive courses on AI and AR tailored for students of all levels. Whether you're a beginner or an expert, we have something for you.</p>
          </ContentBox>
          <ContentBox>
            <h2>Latest News</h2>
            <p>Stay updated with the latest news and developments in the field of AI and AR education. Our blog is your source for insightful articles.</p>
          </ContentBox>
  
          {/* Business Owners and Entrepreneurs Section */}
          <ContentBox>
            <h2>Stella Business Solutions</h2>
            <p>
              Revolutionize your business operations with Stella's advanced AI and AR plugins. Our solutions are designed to propel entrepreneurs and business owners into a future of endless possibilities:
            </p>
            <ul>
              <li>Uncover market trends with our predictive analytics for smarter decision-making.</li>
              <li>Identify opportunities and mitigate risks with Stella's AI-driven insights.</li>
              <li>Gain a competitive edge with our comprehensive competitor analysis tool.</li>
              <li>Strategize with confidence using Stella's suite of business intelligence plugins.</li>
            </ul>
          </ContentBox>
  
          {/* Plugins Preview Section */}
          <PluginPreviews />
  
          {/* Testimonials Section */}
          <Testimonials />
        </Col>
      </Row>
    </Container>
  );
}

  export default MainComponent;
