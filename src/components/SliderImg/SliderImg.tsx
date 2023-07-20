'use client'
import React, { useState, useEffect } from 'react';
import './slider.css'




// Array de objetos con las URLs de las imágenes y sus datos asociados
const slides = [
  {
    url:
      'https://img.freepik.com/fotos-premium/collage-varias-fotos-retratos-cabezas-perros-sobre-fondo-multicolor-multitud-diferentes-colores-brillantes_191971-28740.jpg?w=1380',
    alt: 'Collage 1',
    // Otros datos asociados a la primera imagen, como título, descripción, etc.
  },
  {
    url:
    'https://img.freepik.com/fotos-premium/collage-varias-fotos-retratos-cabezas-perros-sobre-fondo-multicolor-multitud-diferentes-colores-brillantes_191971-28740.jpg?w=1380',

    alt: 'Collage 2',
    // Otros datos asociados a la segunda imagen
  },
  // Agrega más objetos para más imágenes
];

function SliderImg() {
  const totalSlides = slides.length;
  const slideInterval = 2000; // Intervalo de tiempo en milisegundos entre cambios de slide
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Función para avanzar al siguiente slide automáticamente
    const sliderInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, slideInterval);

    // Limpiar el intervalo cuando el componente se desmonte para evitar fugas de memoria
    return () => clearInterval(sliderInterval);
  }, [totalSlides]);

  return (
    <section className='slider_container'>
      <div className="slider__slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slider__slide ${currentSlide === index ? 'active' : ''}`}
            style={{ transform: `translateX(-${currentSlide * 130}%)` }}
          >
            <img src={slide.url} alt={slide.alt} />
            {/* Puedes mostrar otros datos asociados a la imagen aquí */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default SliderImg;