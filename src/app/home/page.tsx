import BrandCard from '@/components/BrandCard/BrandCard'
import ProductCard from '@/components/ProductCard/ProductCard'
import SearchBar from '@/components/SearchBar/SearchBar'
import React from 'react'

function page() {
  return (
    <div className='container'>
      <SearchBar></SearchBar>
      <h1>Hola soy el Home</h1>
      <ProductCard></ProductCard>
      <BrandCard/>
    </div>
  )
}

export default page