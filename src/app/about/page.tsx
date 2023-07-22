import React from 'react'
import './about.css'
import SideBar from '@/components/SideBar/SideBar'
import SearchBar from '@/components/SearchBar/SearchBar'
import HeaderBtna from '@/components/HeaderBtn/HeaderBtn'
import ProfileBtn from '@/components/profileBtn/ProfileBtn'
function about() {
  return (
    <section >
      <SideBar />
      
      <div className='about_page_container'>
        
      <header className='header'>
        
        <SearchBar />
          <HeaderBtna />
          <ProfileBtn/>
        </header>
      <div>
        <h2>
          Conoce Acerca de nosotros
        </h2>
      </div>
      <section className='about-container'>
        <figure>
          <img className='about_img' src="https://img.freepik.com/fotos-premium/dos-perros-gato-mirando-camara_748076-85.jpg?w=360" alt="perros y gatos uno arriba de otro" />
        </figure>
        <div className='about__text-container'>
          <section className='about__section-txt'>
            <h3>Historia</h3>
            <p>Somos la tienda en línea de mascotas con mayor variedad de productos y servicios a domicilio en Bogotá con más de 2.000 productos como: alimentos, dietas naturales, snacks, medicinas, higiene y accesorios.

              Para Fluffy, la salud y bienestar de tu mascota es lo más importante. Nos esforzamos día a día por dar la mejor experiencia y servicio a los pet lovers y para que a tus peluditos no les falte nada para su cuidado y salud.</p>
          </section>

          <section className='about__section-txt'>
            <h3>Misión</h3>
            <p>Brindar un servicio de excelente calidad y satisfacer las necesidades de sus mascotas, ofreciendo una excelente experiencia con los productos ofrecidos dentro de Fluffy  plataforma que se dedica a ofrecer lo mejor del mercado en pro del bienestar de tu mascota.</p>
          </section>

          <section className='about__section-txt'>
            <h3>Visión</h3>
            <p>Convertirnos en la plataforma virtual número uno para el cuidado de mascotas siendo reconocida por la calidad de nuestros productos y servicios.</p>
          </section>

        </div>
        </section>
        </div>

    </section>
  )
}

export default about