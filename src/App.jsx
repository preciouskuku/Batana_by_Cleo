import React from 'react'
import HeroSection from './copmonents/Hero';
import FeaturedProducts from './copmonents/FeaturedProduct';
import Testimonials from './copmonents/Testimonials'
import Subscribe from './copmonents/Subscribe';

export default function App() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <Testimonials />
      <Subscribe />
    </>
  );
}