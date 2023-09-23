import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// --- 🎨 Styled Components Section ---
// This section is dedicated to styled-components that define the CSS styling for different UI elements.

// Container to hold the main content
// Provides padding and a background color to the main content area.

const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
`;

// Eye-catching Heading
const Heading = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  text-align: center;
`;

// Informative Sub-Heading
const SubHeading = styled.h2`
  font-size: 1.8rem;
  color: #34495e;
  text-align: center;
`;

// Additional information text
const InfoText = styled.p`
  font-size: 1rem;
  color: #7f8c8d;
  text-align: center;
  margin-bottom: 20px;
`;

// Mission & Vision statements to provide context and purpose
const Statement = styled.div`
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
  text-align: center;
`;

const MissionStatement = styled(Statement)`
  background-color: #e6f7ff;
`;

const VisionStatement = styled(Statement)`
  background-color: #ffebcc;
`;

// Dynamic Product Listing
const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

// Interactive product items
const ProductItem = styled.div`
  border: 2px solid #ccc;
  padding: 15px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }
`;

// Product icons for visual appeal
const ProductIcon = styled.img`
  width: 100px;
  height: 100px;
`;

// Bold product names
const ProductName = styled.p`
  margin-top: 15px;
  font-weight: bold;
`;

// Animated Review Container
const AnimatedReviewContainer = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: row;
  animation: scroll 20s linear infinite;

  @keyframes scroll {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
`;

const ReviewHeading = styled.h3`
  font-size: 1.2rem;
`;

const UserReview = styled.div`
  margin-top: 20px;
  border-top: 2px solid #eee;
  padding-top: 15px;
`;

const UserRating = styled.p`
  font-weight: bold;
`;

const UserComment = styled.p`
  font-style: italic;
`;

// Product List Component
// This component renders a list of products.
// It fetches individual product details when a product is clicked.
function ProductListComponent({ products }) {

  // Function to handle when a product is clicked
  // Fetches individual product details from the API and logs them.
  const handleProductClick = (product) => {
    fetch(`http://localhost:3001/api/products/${product.id}`)
      .then((response) => response.json())
      .then((productDetails) => {
        console.log("Product details:", productDetails);
      })
      .catch((error) => {
        console.error('Failed to fetch product details:', error);
      });
  };

  return (
    <ProductList>
      {products.map((product) => (
        <ProductItem key={product.id} onClick={() => handleProductClick(product)}>
          <ProductIcon src={product.icon} alt={`Icon for ${product.name}`} />
          <ProductName>{product.name}</ProductName>
        </ProductItem>
      ))}
    </ProductList>
  );
}

// Review List Component
// This component renders a list of reviews for a given product.

function ReviewListComponent({ product }) {
  return (
    <div style={{ display: 'inline-block', marginRight: '50px', padding: '5px' }}>
      <ReviewHeading>Reviews for {product.name}</ReviewHeading>
      {product.reviews.map((review) => (
        <UserReview key={review.id}>
          <UserRating>Rating: {review.rating}/5</UserRating>
          <UserComment>{review.comment}</UserComment>
        </UserReview>
      ))}
    </div>
  );
}

// Review Form Component
// This component renders a form that allows users to submit reviews for products.
function ReviewForm() {
  // Local state variables to hold form data
  const [productId, setProductId] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  // Function to handle form submission
  // Sends a POST request to the API to submit the review.

  const handleSubmit = () => {
    fetch(`http://localhost:3001/api/products/${productId}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rating, comment }),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Review submitted:', data);
    })
    .catch((error) => {
      console.error('Failed to submit review:', error);
    });
  };

  return (
    <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h3>Leave a Review</h3>
      <label>
        Product ID:
        <input type="text" value={productId} onChange={(e) => setProductId(e.target.value)} />
      </label>
      <label>
        Rating:
        <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} min="1" max="5" />
      </label>
      <label>
        Comment:
        <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

// Main Component
// This is the main component that renders the entire page.
// It fetches a list of products from the API and renders them using the ProductListComponent.
function FeaturedProduct() {
  // Local state variable to hold the list of products
  const [mergedProducts, setMergedProducts] = useState([]);

  // useEffect to fetch the list of products from the API when the component mounts
  
  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then((response) => response.json())
      .then((backendProducts) => {
        setMergedProducts(backendProducts);
      })
      .catch((error) => {
        console.error('Failed to fetch products:', error);
      });
  }, []);

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
      <ProductListComponent products={mergedProducts} />
      
      {/* Display animated reviews */}
      <AnimatedReviewContainer>
        {mergedProducts.map((product) => (
          <ReviewListComponent key={product.id} product={product} />
        ))}
      </AnimatedReviewContainer>

      {/* New Review Form Section */}
      <ReviewForm />
    </Container>
  );
}
export default FeaturedProduct;
