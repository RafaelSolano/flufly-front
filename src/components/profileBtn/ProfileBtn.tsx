import React from 'react'

import './styles.css'
function ProfileBtn() {
  return (
    <>
      <div className="header__user">
        <p className='userLabel'>
          <span>¡Bienvenido</span>
          <span id='userName'>Usuario!</span> </p>
        <div className='header__btn-user'>
          <p></p>
          <i className="fa-solid fa-user"></i>
        </div>
      </div>
    </>
    
  )
}

export default ProfileBtn