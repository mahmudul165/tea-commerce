import React, { useEffect, useState } from "react";
import { Container, Image, Card } from "react-bootstrap";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { useRouter } from "next/router";
//  import Image from "next/image";
// import Link from "next/link";
//  import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
//  import { motion } from "framer-motion"
import SliderImg from "public/slider-2.jpg";
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const paths = await data.map((post) => {
    return {
      params: { blogId: post?.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.blogId}`
  );
  // console.log(res);
  const data = await res.json();
  console.log("product data is :", data);

  return {
    props: { data },
    revalidate: 10,
  };
};

function BlogDetails({ data }) {
  return (
    <div className="m-3   ">
      <Container className="m-3 ">
        <Card className="border-0  p-5">
          <Card.Img
           
            variant="top"
            src="https://media.cnn.com/api/v1/images/stellar/prod/230212214951-08-super-bowl-2023.jpg?c=16x9&q=w_800,c_fill"
          />

          <Card.Title   className="py-3 fs-3  fw-bolder ">{data.title}</Card.Title>
          <Card.Text className="fs-5  ">{data.body}</Card.Text>
        </Card>
      </Container>
    </div>
  );
}

export default BlogDetails;
