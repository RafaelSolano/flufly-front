'use client'
import React, { useState } from 'react';
import SearchBar from '@/components/SearchBar/SearchBar';
import HeaderBtna from '@/components/HeaderBtn/HeaderBtn';
import ProfileBtn from '@/components/profileBtn/ProfileBtn';
import CategoryBtn from '@/components/CategoryBtn/CategoryBtn';

import css from './productos.module.css';
import ProductCard from '@/components/ProductCard/ProductCard';
import SideBar from '@/components/SideBar/SideBar';
import ShoppingCar from '@/components/ShoppingCar/ShoppingCar';

function Products() {
  const [isShoppingCarVisible, setIsShoppingCarVisible] = useState(false);

  const toggleShoppingCar = () => {
    setIsShoppingCarVisible(!isShoppingCarVisible);
  };
  return (
    <div>
      <SideBar/>
      <div className={css.container}>
        <div className={css.header}>
          <SearchBar />
          <HeaderBtna
            isShoppingCarVisible={isShoppingCarVisible}
            toggleShoppingCar={toggleShoppingCar} />
          <ProfileBtn />
        </div>
        <div className={css.container_category}> 
        <CategoryBtn />
        </div>
        <section className={css.catalogo_container}>
          <ProductCard />
        </section>
      </div>
    </div>
  );
}

export default Products;
