import styles from './Navbar.module.css'
import NavLink from '../NavLink';

const Navbar = () => {
  return (
    <header>
        <nav className={styles.navigation}>
          <NavLink route="/"> Home </NavLink>
          <NavLink route="/aboutme"> About Me </NavLink>            
        </nav>
    </header>
  )

};

export default Navbar;