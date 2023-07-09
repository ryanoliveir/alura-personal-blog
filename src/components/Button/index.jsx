import styles from './Button.module.css'
const Button = ({ children, size, onClick}) => {
    return (
    <button className={`
        ${styles.button} 
        ${styles[size]}`}
    >
            {children}
        </button>
    )
}


export default Button;

