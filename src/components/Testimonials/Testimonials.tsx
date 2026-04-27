import styles from './Testimonials.module.css';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sophia Laurent',
    role: 'Member since 2024',
    text: 'GYMBAZZ is more than just a gym; it is a lifestyle. The attention to detail and the elite atmosphere have completely transformed my training experience.',
    img: '/member1.png'
  },
  {
    name: 'David Beckham',
    role: 'Pro Athlete',
    text: 'I have trained in facilities all over the world, but the equipment and recovery suite here are truly unmatched. Pure excellence in every corner.',
    img: '/member2.png'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className="container">
        <h2 className="section-title">Member <span>Stories</span></h2>
        <p className="section-subtitle">Hear from the individuals who have redefined their limits at GYMBAZZ.</p>
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.card}>
              <Quote className={styles.quoteIcon} size={40} />
              <p className={styles.text}>{t.text}</p>
              <div className={styles.user}>
                <img src={t.img} alt={t.name} className={styles.avatar} />
                <div className={styles.userInfo}>
                  <h4 className={styles.name}>{t.name}</h4>
                  <p className={styles.role}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
