'use client'
import React, { useState } from 'react'
import './styles.css';
import '../ProductCard/ProductCard'
import HeaderBtn from '@/components/HeaderBtn/HeaderBtn';


interface HeaderBtnaProps {
  isShoppingCarVisible: boolean;
  toggleShoppingCar: () => void;
}
function HeaderBtna( { isShoppingCarVisible, toggleShoppingCar }:HeaderBtnaProps) {

  
  return (
    <div>
      <section className='header__btns'>
        <div className='heder__container-btns'>
          <p  className='header_btn_shoppin-cart'onClick={toggleShoppingCar}>
            <i className="fa-solid fa-bag-shopping"></i>

          </p>
          <a href="" className='header_btn_fav'>
            <i className="fa-regular fa-heart"></i>
          </a>
          <a href="" className='header_btn_alerts'>
            <i className="fa-regular fa-bell"></i>
          </a>

        </div>

      </section>
      
    </div>
  );
}



export default HeaderBtna