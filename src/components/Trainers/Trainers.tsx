import styles from './Trainers.module.css';

const trainers = [
  {
    name: 'Julian Vance',
    specialty: 'Master of Biomechanics',
    img: '/trainer1.png'
  },
  {
    name: 'Elena Rossi',
    specialty: 'Yoga & Holistic Wellness',
    img: '/trainer2.png'
  },
  {
    name: 'Silas Thorne',
    specialty: 'Elite Performance Coach',
    img: '/trainer3.png'
  }
];

const Trainers = () => {
  return (
    <section id="trainers" className={styles.trainers}>
      <div className="container">
        <h2 className="section-title">The <span>Coaches</span></h2>
        <p className="section-subtitle">Mentorship from world-class professionals dedicated to your transformation.</p>
        <div className={styles.grid}>
          {trainers.map((trainer, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imgWrapper}>
                <img src={trainer.img} alt={trainer.name} className={styles.img} />
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{trainer.name}</h3>
                <p className={styles.specialty}>{trainer.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
