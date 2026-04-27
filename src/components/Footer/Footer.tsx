import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.about}>
            <div className={styles.logo}>GYM<span>BAZZ</span></div>
            <p className={styles.text}>The world's most exclusive fitness destination. Where heritage meets high-performance in a sanctuary of pure elegance.</p>
          </div>
          <div className={styles.links}>
            <h4 className={styles.heading}>The Club</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Experience</a></li>
              <li><a href="#facilities">Facilities</a></li>
              <li><a href="#pricing">Membership</a></li>
            </ul>
          </div>
          <div className={styles.contact}>
            <h4 className={styles.heading}>Location</h4>
            <p>Jl. Senopati No. 77, Kebayoran Baru</p>
            <p>Jakarta Selatan, Indonesia</p>
            <p>concierge@gymbazz.com</p>
            <p>+62 (21) 555-7777</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} GYMBAZZ PRIVÉ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
