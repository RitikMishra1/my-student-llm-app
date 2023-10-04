// ProductListComponent.js

import React from 'react';
import { ProductList, ProductItem, ProductIcon, ProductName } from './StyledComponents';

const ProductListComponent = ({ products, setSelectedProduct }) => {
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <ProductList>
      {products.map((product) => (
        <ProductItem 
          key={product.id} 
          onClick={() => handleProductClick(product)}
        >
          <ProductIcon src={`${process.env.PUBLIC_URL}/${product.icon}`} alt={`Icon for ${product.name}`} />
          <ProductName>{product.name}</ProductName>
        </ProductItem>
      ))}
    </ProductList>
  );
};

export default ProductListComponent;
