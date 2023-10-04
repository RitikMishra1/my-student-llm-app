import React from 'react';
import PropTypes from 'prop-types';  // Import PropTypes
import { ProductDetail, ProductDescription } from './StyledComponents';

const ProductDetailComponent = ({ product }) => {
  // Error handling
  if (!product) {
    return <p>No product details available.</p>;
  }

  const { name, icon, description } = product;

  // Image fallback function
  const addDefaultSrc = (e) => {
    e.target.src = 'path/to/default/image.png';
  };

  return (
    <ProductDetail>
      <h2>{name}</h2>
      <img 
        src={icon} 
        alt={`Icon for ${name}`} 
        onError={addDefaultSrc}  // Fallback image
        aria-label={`Icon for ${name}`}  // ARIA label
      />
      <ProductDescription>{description}</ProductDescription>
    </ProductDetail>
  );
};

// PropTypes validation
ProductDetailComponent.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default ProductDetailComponent;
