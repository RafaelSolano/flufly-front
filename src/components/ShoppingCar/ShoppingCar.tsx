import React from 'react'
import'../ShoppingCar/styles.css'
function ShoppingCar() {
  return (
    <>
      <div className='shopping_cart '>
        <div className='shopping_cart__header'>
          <i className="fa-solid fa-arrow-left"></i>
          <h3>Carrito de compras</h3>

        </div>

        <div className='shopping_cart__list'>
          <div className='shopping_cart__item'>
            <div className='shopping_cart__img'>
              <img src="../../img/products/1-pedigree.svg" alt="" />
              <p>Max Vita - Alimento Perro Cachorro Crecimiento Saludable Pollo </p>
              <p className='shopping_cart_delete'>
                <i className="fa-solid fa-trash-can"></i></p>
            </div>
            <div className='shopping_cart__price'>
              <p> Cantidad: <b>1</b> </p>
              <p>Total: $ 88.749</p>
            </div>
          </div>

        </div>


        <div className='shopping_cart__footer'>
          <div className='shopping_cart__total'>
            <p>Total: $34.434</p>
          </div >
          <div className='shopping_cart__btn-pay'>
            <p> Ir a Pagar</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default ShoppingCar