import React from 'react'
import '../HeaderBtn/styles.css'
function HeaderBtna() {
  return (
    <div>
       <section className='header__btns'>
      <div className='heder__container-btns'>
        <a href="" className='header_btn_shoppin-cart'>
          <i className="fa-solid fa-bag-shopping"></i>

        </a>
        <a href=""className='header_btn_fav'>
          <i className="fa-regular fa-heart"></i>
        </a>
        <a href=""className='header_btn_alerts'>
          <i className="fa-regular fa-bell"></i>
        </a>

      </div>

      </section>
      
     
    </div>
  )
}

export default HeaderBtna