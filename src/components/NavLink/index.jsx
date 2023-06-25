import styles from './NavLink.module.css'
import { useLocation, Link } from 'react-router-dom';

const NavLink = ({children, route }) => {
    
    const location = useLocation();

    const isCurrentRoute = location.pathname === route;
    const linkClassName = `${styles.link} ${isCurrentRoute ? styles.current_link : ''}`;


    return (
        <Link className={linkClassName} to={route}>
          {children}
        </Link>
    )
}   

export default NavLink;