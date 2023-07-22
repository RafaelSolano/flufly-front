import React from 'react'

import './styles.css'
import Link from 'next/link'
function ProfileBtn() {
  return (
    <>
      <div className="header__user">
        <p className='userLabel'>
          <span>¡Bienvenido</span>
          <span id='userName'>Usuario!</span> </p>
        <Link href={'/singup'} className='header__btn-user'>
          <p></p>
          <i className="fa-solid fa-user"></i>
        </Link>
      </div>
    </>
    
  )
}

export default ProfileBtn