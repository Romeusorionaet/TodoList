import logoTodo from '../assets/logoTodo.svg'
import styles from './Header.module.css'

export function Header() {
    return(
        <div className={styles.header}>
            <img src={logoTodo} alt='logo todo' />
        </div>
    )
}