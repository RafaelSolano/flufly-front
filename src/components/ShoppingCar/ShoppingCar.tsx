import React, { useState } from 'react'
import '../ShoppingCar/styles.css'
import Link from 'next/link';

interface Producto {
  id: number;
  img: string;
  alt: string;
  nombre: string;
  Descripcion: string;
  precio: number;
}

interface ShoppingCarProps {
  productos: Producto[];
  onRemoveProduct: (id: number) => void;
  onHideShoppingCar: () => void;
  isShoppingCarVisible: boolean;
}

function ShoppingCar({ productos, onRemoveProduct, onHideShoppingCar, isShoppingCarVisible}: ShoppingCarProps) {



  return (
    <div >
      <div className={`shopping_cart ${isShoppingCarVisible ? '' : 'shopping-cart-hidden'}`}>
        <div className='shopping_cart__header'>
          <i className="fa-solid fa-arrow-left"  onClick={onHideShoppingCar}></i>
          <h3>Carrito de compras</h3>

        </div>

        <div className='shopping_cart__list'>
        {productos.map((producto) => (
          <div key={producto.id} className='shopping_cart__item'>
            <div className='shopping_cart__img'>
              <img src={producto.img} alt={producto.alt} />
              <p>{producto.nombre}</p>
              <p className='shopping_cart_delete' onClick={() => onRemoveProduct(producto.id)}>
                <i className="fa-solid fa-trash-can"></i>
              </p>
            </div>
            <div className='shopping_cart__price'>
              <p> Cantidad: <b>1</b> </p>
              <p>Total: $ {producto.precio}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='shopping_cart__footer'  >
        <div className='shopping_cart__total'>
          {/* Calcular el total sumando los precios de los productos */}
          <p>Total: $ {productos.reduce((total, producto) => total + producto.precio, 0)}</p>
        </div>
        <div className='shopping_cart__btn-pay'>
          <Link href='/pasarelaPay' > Ir a Pagar</Link>
        </div>
      </div>
      </div>
      </div>
  );
}


export default ShoppingCar