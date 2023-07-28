import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <header>
        <nav>
          <img/>
          <a href='/'>Home</a>
          <a href='/events'>Events</a>
          <a href='/about-us'>About Us</a>
        </nav>
      </header>

      <footer className={styles.footer}>
        <p>FoxSay &copy; 2023</p>
      </footer>
    </div>
  )
}
