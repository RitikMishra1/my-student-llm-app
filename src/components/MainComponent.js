// MainComponent.js
import React, { useEffect, useState } from 'react';
import ProductListComponent from './ProductListComponent';
import ProductDetailComponent from './ProductDetailComponent';
import { Heading, SubHeading, InfoText, MissionStatement, VisionStatement } from './StyledComponents';
import { Container, SearchBar, SearchResults } from './StyledComponents';
import { fetchAllProducts } from '../api/api'; // Import the fetchAllProducts function

const MainComponent = () => {
  const [mergedProducts, setMergedProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchAllProducts() // Use the fetchAllProducts function
      .then((data) => {
        setMergedProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value === '') {
      setSearchResults([]);
      return;
    }
    const filteredProducts = mergedProducts.filter(product =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filteredProducts);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container>
      <Heading>Welcome to Stella Inc.'s AI Education</Heading>
      <SubHeading>Empowering Students with AI and AR</SubHeading>
      <InfoText>Explore our range of AI tools designed to revolutionize your learning experience.</InfoText>
      <MissionStatement>
        <strong>Mission:</strong> For the students, of the students, by the students.
      </MissionStatement>
      <VisionStatement>
        <strong>Vision:</strong> To be the world's leading platform in AI and AR education.
      </VisionStatement>
      <SearchBar 
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {searchResults.length > 0 && (
        <SearchResults>
          {searchResults.map(product => (
            <div key={product.id}>
              {product.name}
            </div>
          ))}
        </SearchResults>
      )}
      <ProductListComponent products={mergedProducts} setSelectedProduct={setSelectedProduct} />
      {selectedProduct && (
        <ProductDetailComponent product={selectedProduct} />
      )}
    </Container>
  );
};

export default MainComponent;
