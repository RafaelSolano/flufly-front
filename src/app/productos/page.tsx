import React from 'react'
import SearchBar from '@/components/SearchBar/SearchBar';
import HeaderBtna from '@/components/HeaderBtn/HeaderBtn';
import ProfileBtn from '@/components/profileBtn/ProfileBtn';
import CategoryBtn from '@/components/CategoryBtn/CategoryBtn';

import css from "./productos.module.css";
import ProductCard from '@/components/ProductCard/ProductCard';

function products() {
  return (
    
    <div className={css.container}>
      <div  className={css.header}>
      <SearchBar />
        <HeaderBtna />
        <ProfileBtn/>
      </div>
      <CategoryBtn />
      <section className={css.catalogo_container}>
        <ProductCard/>

      </section>
    </div>
  )
}

export default products