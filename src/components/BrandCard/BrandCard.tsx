import React from 'react';
import '../BrandCard/styles.css';

const brandsData = [
  {
    id: 1,
    imgSrc: 'https://portipets.com/wp-content/uploads/2021/06/aasaso.png',
    alt: 'Chunky Brand',
  },
  {
    id: 2,
    imgSrc: 'https://portipets.com/wp-content/uploads/2021/06/1.png',
    alt: 'Agility gold',
  },
  {
    id: 3,
    imgSrc: 'https://portipets.com/wp-content/uploads/2021/06/asasasaaaasb-edico.png',
    alt: 'Dog Chow',
  },
  {
    id: 4,
    imgSrc: 'https://portipets.com/wp-content/uploads/2021/06/ssssico.png',
    alt: 'nutre Can',
  },
  {
    id: 5,
    imgSrc: 'https://portipets.com/wp-content/uploads/2021/06/asasaso.png',
    alt: 'Tasted Wild',
  },
  {
    id: 6,
    imgSrc: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/012013/pedigree.gif?itok=JdUR6YTZ',
    alt: 'Pedigree',
  },
  {
    id: 7,
    imgSrc: 'https://www.purina-arabia.com/sites/default/files/2022-04/Felix_Logo_Colour_High_Res%28262%29-1.png',
    alt: 'felix',
  },
  {
    id: 8,
    imgSrc: 'https://i.pinimg.com/originals/c4/c2/f3/c4c2f331f7a5a830892224dce8d840cc.jpg',
    alt: 'Whiskas',
  },
  // Agrega más objetos para más marcas
];

function BrandCard() {
  return (
    <>
      <section className='brands'>
        <div className="brands__title">
          <h2>¡Más de 100 Marcas Disponibles!</h2>
        </div>

        <div className="container-brands">
          {brandsData.map((brand) => (
            <div key={brand.id} className="brand__card">
              <img className='brand__card_img' src={brand.imgSrc} alt={brand.alt} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default BrandCard;
