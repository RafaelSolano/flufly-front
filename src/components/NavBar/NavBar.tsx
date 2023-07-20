import styles from './NavBar.module.css';
import React from 'react'
import Link from 'next/link';



const links = [
  {
    label: 'Home',
    route:'/home'
  },
  {
    label: 'About',
    route:'/about'
  },
  {
    label: 'Posts',
    route:'/posts'
  
}
]

function NavBar() {
  return (
    <div><nav>
    <ul className={styles.navigation}>
        {links.map(({ label, route }) => (
          <li key={route}>
            <Link className={styles.link_a}href={route}>{ label}</Link>
          </li>
        ))}
        
        
    </ul>
</nav></div>

    
  )
}

export default NavBar