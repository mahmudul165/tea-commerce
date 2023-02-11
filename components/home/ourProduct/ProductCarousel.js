// import React from 'react';
// import { Container, Row, Col, Carousel } from 'react-bootstrap';

// const products = [
//   {
//     id: 1,
//     name: 'Product 1',
//     image: 'https://via.placeholder.com/300x200',
//   },
//   {
//     id: 2,
//     name: 'Product 2',
//     image: 'https://via.placeholder.com/300x200',
//   },
//   {
//     id: 3,
//     name: 'Product 3',
//     image: 'https://via.placeholder.com/300x200',
//   },
//   {
//     id: 4,
//     name: 'Product 4',
//     image: 'https://via.placeholder.com/300x200',
//   },
//   {
//     id: 5,
//     name: 'Product 5',
//     image: 'https://via.placeholder.com/300x200',
//   },
//   {
//     id: 6,
//     name: 'Product 6',
//     image: 'https://via.placeholder.com/300x200',
//   },
//   {
//     id: 7,
//     name: 'Product 4',
//     image: 'https://via.placeholder.com/300x200',
//   },
//   {
//     id: 8,
//     name: 'Product 5',
//     image: 'https://via.placeholder.com/300x200',
//   },
//   {
//     id: 9,
//     name: 'Product 6',
//     image: 'https://via.placeholder.com/300x200',
//   },
// ];

// const ProductCarousel = () => {
//   return (
//     <Carousel>
//       {products.map((product, index) => {
//         if (index % 4 === 0) {
//           return (
//             <Carousel.Item key={product.id}>
//               <Container>
//                 <Row>
//                   {products
//                     .slice(index, index + 4)
//                     .map((product) => (
//                       <Col xs={12} md={3} key={product.id}>
//                         <div style={{ textAlign: 'center' }}>
//                           <img
//                             src={product.image}
//                             alt={product.name}
//                             style={{ width: '100%' }}
//                           />
//                           <p>{product.name}</p>
//                         </div>
//                       </Col>
//                     ))}
//                 </Row>
//               </Container>
//             </Carousel.Item>
//           );
//         }
//         return null;
//       })}
//     </Carousel>
//   );
// };

// export default ProductCarousel;
import React from 'react'

function ProductCarousel() {
  return (
    <div>ProductCarousel</div>
  )
}

export default ProductCarousel
