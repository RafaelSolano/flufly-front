'use client'
import React, { useState } from 'react';
import'../ProductCard/styles.css'
import ShoppingCar from '../ShoppingCar/ShoppingCar';

interface Producto {
  id: number;
  img: string;
  alt: string;
  nombre: string;
  Descripcion: string;
  precio: number;
}
const productos:Producto[] = [
  {
    id: 1,
    img:
      'https://res.cloudinary.com/djsupmnmo/image/upload/v1689898446/3-hulls_nk4a4x.png',
    alt: 'Hills - Science Diet Puppy Small Paws Dog',
    nombre: 'Hills - Science Diet Puppy Small Paws Dog',
    Descripcion: 'Perro Cachorro Talla Mediana',
    precio: 42.356,
    

  },
  {
    id: 2,
    img: 'https://res.cloudinary.com/djsupmnmo/image/upload/v1689898446/2-max_i665ey.png',
    alt: 'Max Vita - Alimento Perro Cachorro ',
    nombre: 'Max Vita - Alimento Perro Cachorro ',
    Descripcion: 'Cachorro',
    precio: 50.205,
  },
  {
    id: 3,
    img: 'https://res.cloudinary.com/djsupmnmo/image/upload/v1689898446/4-royal_cannin_uwwlpp.png',
    alt: 'Royal Canin',
    nombre: 'Royal Canin',
    Descripcion: 'Bull Dog Adulto',
    precio: 88.704,
  },
  {
    id: 4,
    img: 'https://res.cloudinary.com/djsupmnmo/image/upload/v1689898446/5-nutrecan_nkgosu.png',
    alt: 'Nutrecan - Alimentos Perros Campo',
    nombre: 'Nutrecan - Alimentos Perros Campo',
    Descripcion: 'Alimentos Perros Campo',
    precio: 62.916,
  },
  {
    id: 5,
    img: 'https://res.cloudinary.com/djsupmnmo/image/upload/v1689898446/6-agilite-gold_xtdjkr.png',
    alt: 'Agility Dog - Grandes Adultos',
    nombre: 'Agility Dog - Grandes Adultos',
    Descripcion: 'Alimento Perro Cachorro',
    precio: 50.185,
  },
  {
    id: 6,
    img: 'https://res.cloudinary.com/djsupmnmo/image/upload/v1689898446/7-dogchow_svgyk2.png',
    alt: 'Dog Chow - Salud Visible Adultos Minis y Pequeños',
    nombre: 'Dog Chow - Salud Visible Adultos Minis y Pequeños',
    Descripcion: 'Perro Cachorro Talla Mediana',
    precio: 42.356,
  },
  {
    id: 7,
    img: 'https://res.cloudinary.com/djsupmnmo/image/upload/v1689898446/8-guaAmor15_j2thtq.png',
    alt: 'Guaumor - Adultos Razas Medianas Y Grandes',
    nombre: 'Guaumor - Adultos Razas Medianas Y Grandes',
    Descripcion: 'Razas Pequeñas',
    precio: 50.156,
  },
  {
    id: 8,
    img: 'https://res.cloudinary.com/djsupmnmo/image/upload/v1689898446/9-nutrique_cnu2ee.png',
    alt: 'Nutrique - Perro Cachorro Talla Mediana',
    nombre: 'Nutrique - Perro Cachorro Talla Mediana',
    Descripcion: 'Salud Visible Adultos',
    precio: 105.655,
  },
  {
    id: 9,
    img: 'https://res.cloudinary.com/djsupmnmo/image/upload/v1689898446/1-pedigree_vtatff.png',
    alt: 'Pedigree - Alimento Perro Cachorro ',
    nombre: 'Pedigree - Alimento Perro Cachorro' ,
    Descripcion: 'Science Diet Puppy Small Paws',
    precio: 88.749,
  },
];

const listShopping: Producto[] = [];

function ProductCard() {
  const [isShoppingCarVisible, setIsShoppingCarVisible] = useState(false);

  const [listShopping, setListShopping] = useState<Producto[]>([]);
  const [favoritos, setFavoritos] = useState<Producto[]>([]);

  const handleAddFav = (id: number) => {

    setFavoritos((prevFavoritos) => {
      if (prevFavoritos.some((producto) => producto.id === id)) {

        return prevFavoritos.filter((producto) => producto.id !== id);
      } else {
        const productoFavorito = productos.find((producto) => producto.id === id);
        return productoFavorito ? [...prevFavoritos, productoFavorito] : prevFavoritos;
      }
    });
    
  };

  let countCar = 0;
  const handleShoppingCat = (id: number) => {
    const productoEncontrado = productos.find(producto => producto.id === id);
    if (productoEncontrado) {
      setListShopping((prevListShopping) => [...prevListShopping, productoEncontrado]);
    

    }
    if (!isShoppingCarVisible) {
      setIsShoppingCarVisible(!isShoppingCarVisible);
      
    }
    console.log(listShopping);
    countCar = listShopping.length;
    console.log(countCar);

  }

  const handleRemoveProduct = (id: number) => {
    setListShopping((prevListShopping) =>
      prevListShopping.filter((producto) => producto.id !== id)
    );
  };


  const toggleShoppingCar = () => {
    setIsShoppingCarVisible(!isShoppingCarVisible);
    console.log("hola");
  };
  

  return (
    <>
      <div className='contCar '>
        <ShoppingCar
          productos={listShopping}
          onRemoveProduct={handleRemoveProduct}
          onHideShoppingCar={toggleShoppingCar}
          isShoppingCarVisible={isShoppingCarVisible}/>

      </div>
      
      
      {productos.map((producto) => (
        <div key={producto.id} className='card-product'>
          <figure className='card_product_figure'>
            <img className='card-product__img' src={producto.img} alt={producto.alt} />
          </figure>
          <div className='card-product__content-txt'>
            <div className='card-product__text-main'>
              <p className='card-product__title'>{producto.nombre}</p>
              <p className='card-product__stars'>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
              </p>
            </div>
            <div className='card-product__footer'>
              <div className='card-product__total'>
                <p>${producto.precio}</p>
              </div>
              <div className='card-product__btn-cont'>
                <p onClick={()=> handleShoppingCat(producto.id)} className='card-product__btn-add-shopping'>
                  <i className='fa-solid fa-bag-shopping'></i>
                </p>
                <p
                  id='fav-icon'
                  className='card-product__btn-add-fav'
                  onClick={() => handleAddFav(producto.id)}
                >
                  {favoritos.some((favorito) => favorito.id === producto.id) ? (
                    <i className='fa-solid fa-heart'></i>
                  ) : (
                    <i className='fa-regular fa-heart'></i>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

    </>
  );
}

export default ProductCard;



// function ProductCard() {
//   return (
//     <>
//       {productos.map((producto) => (
//         <div key={producto.id} className='card-product'>
//           <figure className='card_product_figure'>
//             <img className='card-product__img' src={producto.img} alt={producto.alt} />
//           </figure>
//           <div className='card-product__content-txt'>
//             <div className='card-product__text-main'>
//               <p className='card-product__title'>{producto.nombre}</p>
//               <p className='card-product__stars'>
//                 <i className='fa-solid fa-star'></i>
//                 <i className='fa-solid fa-star'></i>
//                 <i className='fa-solid fa-star'></i>
//                 <i className='fa-solid fa-star'></i>
//                 <i className='fa-solid fa-star'></i>
//               </p>
//             </div>
//             <div className='card-product__footer'>
//               <div className='card-product__total'>
//                 <p> $ {producto.precio}</p>
//               </div>
//               <div className='card-product__btn-cont'>
//                 <p className='card-product__btn-add-shopping'>
//                   <i className='fa-solid fa-bag-shopping'></i>
//                 </p>
//                 <p id='fav-icon' className='card-product__btn-add-fav'>
//                   <i id='fav-i' className='fa-regular fa-heart'></i>
//                   <i className='fa-solid fa-heart'></i>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

// export default ProductCard;