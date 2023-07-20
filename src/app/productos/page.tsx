import React from 'react'
import CategoryBtn from '../../components/CategoryBtn/CategoryBtn';
import ShoppingCar from '@/components/ShoppingCar/ShoppingCar';
import'../productos/styles.css'
function products() {
  return (
    <div className='container_page_product'>
      <CategoryBtn/>
      <ShoppingCar/>
    </div>
  )
}

export default products