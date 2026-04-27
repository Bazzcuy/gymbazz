import styles from './Services.module.css';
import { Dumbbell, Zap, Users, Apple } from 'lucide-react';

const services = [
  {
    title: 'Precision Training',
    desc: 'Bespoke fitness programs tailored to your physiological profile and personal ambitions.',
    icon: <Dumbbell size={32} />
  },
  {
    title: 'Elite Performance',
    desc: 'Advanced biomechanical analysis and data-driven conditioning for peak human potential.',
    icon: <Zap size={32} />
  },
  {
    title: 'Curated Classes',
    desc: 'Intimate group sessions led by master instructors in a sophisticated environment.',
    icon: <Users size={32} />
  },
  {
    title: 'Wellness Concierge',
    desc: 'Comprehensive nutritional guidance and recovery protocols for total body harmony.',
    icon: <Apple size={32} />
  }
];

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <h2 className="section-title">The <span>Experience</span></h2>
        <p className="section-subtitle">Discover a new standard of personal wellness and architectural elegance.</p>
        <div className={styles.grid}>
          {services.map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
