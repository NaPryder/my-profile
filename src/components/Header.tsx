import styles from "./Header.module.css"

const Header = () => {
  return (
    <header>
      <nav>
        <a className={styles.item} href="#about-me">About Me</a>
        <a className={styles.item} href="#contact">Contact</a>
        <a className={styles.item} href="#experiences">Experiences</a>
        <a className={styles.item} href="#skills">Skills</a>
      </nav>
    </header>
  )
}

export default Header