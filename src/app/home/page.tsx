import BrandCard from '@/components/BrandCard/BrandCard'
import HeaderBtna from '@/components/HeaderBtn/HeaderBtn'
import ProductCard from '@/components/ProductCard/ProductCard'
import SearchBar from '@/components/SearchBar/SearchBar'
import React from 'react'

import css from './home.module.css'
import ProfileBtn from '@/components/profileBtn/ProfileBtn'
import SliderImg from '@/components/SliderImg/SliderImg'

function page() {
  return (
    <div className={css.container}>
      <header  className={css.header}>
      <SearchBar />
        <HeaderBtna />
        <ProfileBtn/>
      </header>
      
      <SliderImg/>
      
      
      <ProductCard/>
      <BrandCard/>
    </div>
  )
}

export default page