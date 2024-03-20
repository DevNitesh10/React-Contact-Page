import styles from './Navigation.module.css'

const Navbar = () => {
  return (
    <>
    <nav className={`${styles.navigation} container`}>
        <div>
            <img src="/public/images/logo.png" alt="logo" />
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar