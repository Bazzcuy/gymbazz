import styles from './Facilities.module.css';

const facilities = [
  { 
    name: 'Strength Suite', 
    img: '/fac-strength.png',
    desc: 'Bespoke equipment for high-performance strength conditioning.'
  },
  { 
    name: 'Zen Yoga Studio', 
    img: '/fac-yoga.png',
    desc: 'A tranquil sanctuary for mindfulness and core flexibility.'
  },
  { 
    name: 'Recovery Spa', 
    img: '/fac-spa.png',
    desc: 'Total body rejuvenation with state-of-the-art spa facilities.'
  }
];

const Facilities = () => {
  return (
    <section id="facilities" className={styles.facilities}>
      <div className="container">
        <h2 className="section-title">Elite <span>Facilities</span></h2>
        <p className="section-subtitle">Exquisite architectural spaces designed for maximum performance and rejuvenation.</p>
        <div className={styles.grid}>
          {facilities.map((f, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imgWrapper}>
                <img src={f.img} alt={f.name} className={styles.img} />
                <div className={styles.overlay}>
                  <h3 className={styles.name}>{f.name}</h3>
                  <p className={styles.desc}>{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
