import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Redefining <br /><span>Excellence</span>
        </h1>
        <p className={styles.subtitle}>
          Welcome to the pinnacle of fitness. An unparalleled sanctuary designed for those who demand more from their training and themselves.
        </p>
        <div className={styles.cta}>
          <button className="premium-btn">Explore Membership</button>
          <button className="outline-btn">The Space</button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src="/hero-light.png" alt="Luxury Gym" className={styles.image} />
      </div>
    </section>
  );
};

export default Hero;
