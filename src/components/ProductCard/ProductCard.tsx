import React from 'react'
import'../ProductCard/styles.css'

function ProductCard() {
  return (
    <>
       <div className='card-product'>
        <figure>
          <img className='card-product__img' src="../../img/products/1-pedigree.svg" alt=""/>
        </figure>
        <div className="card-product__content-txt">

          <div className='card-product__text-main'>

            <p className='card-product__title'>Max Vita - Alimento Perro Cachorro Crecimiento Saludable Pollo</p>
            <p className='card-product__stars'>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </p>
          </div>

          <div className='card-product__footer'>
            <div className='card-product__total'>
              <p> $ 32.000</p>
            </div>

            <div className='card-product__btn-cont'>
              <p className='card-product__btn-add-shopping'>
                <i className="fa-solid fa-bag-shopping"></i>
              </p>
              <p id='fav-icon' className='card-product__btn-add-fav'>
                <i id='fav-i' className="fa-regular fa-heart"></i>
                <i className="fa-solid fa-heart"></i>
              </p>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default ProductCard