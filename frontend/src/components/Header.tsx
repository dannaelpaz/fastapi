import styles from './Header.module.css'

export function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <nav className={styles.navbar}>
                    <h1>LOGO</h1>

                    <ul>
                        <li>Home</li>
                        <li>Players</li>
                        <li>Partidas</li>
                        <li>Search</li>
                    </ul>

                </nav>
            </div>
        </header>

    )    
}