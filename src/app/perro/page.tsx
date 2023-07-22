import SideBar from '@/components/SideBar/SideBar';
import React from 'react';
import css from './perro.module.css';
import SearchBar from '@/components/SearchBar/SearchBar';
import HeaderBtna from '@/components/HeaderBtn/HeaderBtn';
import CategoryBtn from '@/components/CategoryBtn/CategoryBtn';
import ProfileBtn from '@/components/profileBtn/ProfileBtn';
import ProductCard from '@/components/ProductCard/ProductCard';

function Perro() {
  return (
    <>
      <SideBar />
      <div className={css.container}>
        <div className={css.header}>
          <SearchBar />
          <HeaderBtna />
          <ProfileBtn />
        </div>
        <div className={css.container_category}>
          <CategoryBtn />
        </div>
        <section className={css.catalogo_container}>
          <ProductCard />
        </section>
      </div>
    </>
  );
}

export default Perro;
