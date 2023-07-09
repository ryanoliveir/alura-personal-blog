import { useNavigate } from 'react-router-dom';
import styles from './BackButton.module.css'
const BackButton = ({ children, size}) => {

    const navigete = useNavigate();

    return (
    <button className={`
        ${styles.button_back} 
        ${styles[size]}`}
        onClick ={() => navigete(-1)}
    >
            {children}
        </button>
    )
}


export default BackButton;

