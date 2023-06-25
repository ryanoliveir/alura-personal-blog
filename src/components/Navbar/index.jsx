import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <nav className={styles.navigation}>
            <Link className={styles.link} to="/">Home</Link>
            <Link className={styles.link} to="/aboutme">About Me</Link>
        </nav>
    </header>
  )

};

export default Navbar;