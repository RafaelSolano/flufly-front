import BrandCard from '@/components/BrandCard/BrandCard'
import HeaderBtna from '@/components/HeaderBtn/HeaderBtn'
import ProductCard from '@/components/ProductCard/ProductCard'
import SearchBar from '@/components/SearchBar/SearchBar'
import React from 'react'

import css from './home.module.css'
import ProfileBtn from '@/components/profileBtn/ProfileBtn'
import SliderImg from '@/components/SliderImg/SliderImg'
import SideBar from '@/components/SideBar/SideBar'

function page() {
  return (
    <div className={css.container}>
      <SideBar></SideBar>

      <header className={css.header}>
        
      <SearchBar />
        <HeaderBtna />
        <ProfileBtn/>
      </header>
    
      <div className={css.container_slider}>
      <SliderImg/>

      </div>
      
    
      <div className={css.containerBrans}>
      < BrandCard />
        

      </div>
      <section className={css.products_container}>
        <ProductCard/>
      </section>
      
    </div>
  )
}

export default page