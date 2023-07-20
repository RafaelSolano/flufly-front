import React from 'react'
import '../CategoryBtn/styles.css'

function CategoryBtn() {
  return (
    <>
      
  <section className='categories-container'>
    <h3>Categorias</h3>

    <div className='categories__btns-container'>
      
      <div className='categories__btn'>
        <div className='categories__icon'>
          <i className="fa-solid fa-bowl-food"></i>
        </div>
        <p className='categories__text'> Alimento</p>
      </div>

      <div className='categories__btn'>
        <div className='categories__icon'>
          <i className="fa-solid fa-bone"></i>
        </div>
        <p className='categories__text'> Snacks</p>
      </div>

      <div className='categories__btn'>
        <div className='categories__icon'>
          <i className="fa-sharp fa-solid fa-baseball"></i>

        </div>
        <p className='categories__text'> Juguetes</p>
      </div>

      <div className='categories__btn'>
        <div className='categories__icon'>
          <i className="fa-solid fa-shirt"></i>
        </div>
        <p className='categories__text'> Accesorios</p>
      </div>

      <div className='categories__btn'>
        <div className='categories__icon'>
          <i className="fa-solid fa-house-medical"></i>
        </div>
        <p className='categories__text'> FarmaPet</p>
      </div>

      <div className='categories__btn'>
        <div className='categories__icon'>
          <i className="fa-solid fa-pump-soap"></i>
        </div>
        <p className='categories__text'> Higiene</p>
      </div>
    </div>

  </section>
    </>
  )
}

export default CategoryBtn