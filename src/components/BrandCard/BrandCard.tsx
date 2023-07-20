import React from 'react'
import'../BrandCard/styles.css'

function BrandCard() {
  return (
    <>
       <section className='brands'>
      
      <div className="brands__title">
        <h2>!Mas de 100 Marcas Disponibles¡</h2>
      </div>

      <div className="container-brands">

        <div className="brand__card">
          <img className='brand__card_img' src="./img/brands/chunky.svg" alt=""/>
        </div>

        <div className="brand__card">
          <img className='brand__card_img' src="./img/brands/besties.svg" alt=""/>
        </div>

        <div className="brand__card">
          <img className='brand__card_img' src="./img/brands/proplan.svg" alt=""/>
        </div>

        <div className="brand__card">
          <img className='brand__card_img' src="./img/brands/hils.svg" alt=""/>
        </div>

        <div className="brand__card">
          <img className='brand__card_img' src="./img/brands/max.svg" alt=""/>
        </div>

        <div className="brand__card">
          <img className='brand__card_img' src="./img/brands/vitalli.svg" alt=""/>
        </div>

        <div className="brand__card">
          <img className='brand__card_img' src="./img/brands/equilibrio.svg" alt=""/>
        </div>

        <div className="brand__card">
          <img className='brand__card_img' src="./img/brands/nature.svg" alt=""/>
        </div>

        <div className="brand__card">
          <img className='brand__card_img' src="./img/brands/guamor.svg" alt=""/>
        </div>

        <div className="brand__card">
          <img className='brand__card_img' src="./img/brands/dopgourmet.svg" alt=""/>
        </div>

        
      </div>
    </section>
    </>
  )
}

export default BrandCard