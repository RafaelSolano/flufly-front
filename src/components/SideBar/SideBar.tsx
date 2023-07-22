import React from 'react';
import Link from 'next/link';
import './styles.css';
import useActiveLink from './useActiveLink';


interface LinkItem {
  label: string;
  route: string;
  className: string;
  ico: string;
}
const links: LinkItem[] = [
  {
    label: 'Inicio',
    route: '/home',
    className: 'menu__item_text',
    ico: 'fas fa-poll-h',
  },
  {
    label: 'Perro',
    route: '/perro',
    className: 'menu__item_text',
    ico: 'fas fa-dog',
  },
  {
    label: 'Gato',
    route: '/gato',
    className: 'menu__item_text',
    ico: 'fas fa-cat',
  },
  {
    label: 'Productos',
    route: '/productos',
    className: 'menu__item_text',
    ico: 'fas fa-bone',
  },
  {
    label: 'Servicios',
    route: '/servicios',
    className: 'menu__item_text',
    ico: 'fas fa-briefcase-medical',
  },
  {
    label: 'Nosotros',
    route: '/about',
    className: 'menu__item_text',
    ico: 'fas fa-user-friends',
  },
  {
    label: 'Perdidos',
    route: '/',
    className: 'menu__item_text',
    ico: 'fas fa-poll-h',
  },
  
];

function SideBar() {
  useActiveLink();
  return (
    <div>
      <aside className='menu_container'>
        <nav className='menu__nav'>
          <figure className='menu__img_container'>
            <img
              className='menu__img_icon'
              src='https://res.cloudinary.com/djsupmnmo/image/upload/v1690033037/icos/Imagotipo_ux9mqv.png'
              alt='Logo fluffy perrito'
            />
          </figure>
          <div className='menu__options_container'>
            {links.map(({ label, route, className, ico }) => (
              <Link key={route} href={route} className={className}>
                <h3>
                  <i className={ico}></i>
                  <span>{label}</span>
                </h3>
              </Link>
            ))}
          </div>
        </nav>
      </aside>
    </div>
  );
}

export default SideBar;
