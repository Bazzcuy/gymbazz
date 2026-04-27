import styles from './Events.module.css';
import { Calendar, Clock, MapPin } from 'lucide-react';

const events = [
  {
    title: 'Summer Wellness Retreat',
    date: 'June 15, 2026',
    time: '08:00 AM - 04:00 PM',
    location: 'Elite District Studio',
    img: '/event1.png',
    desc: 'An immersive day of yoga, meditation, and nutritional workshops designed to reset your body and mind.'
  },
  {
    title: 'Masterclass: Power Lifting',
    date: 'July 10, 2026',
    time: '10:00 AM - 12:00 PM',
    location: 'Main Strength Floor',
    img: '/fac-strength.png',
    desc: 'Join our head coach Julian Vance for an exclusive session on perfecting your compound movements.'
  }
];

const Events = () => {
  return (
    <section id="events" className={styles.events}>
      <div className="container">
        <h2 className="section-title">Club <span>Events</span></h2>
        <p className="section-subtitle">Join our exclusive community gatherings and elevate your fitness knowledge.</p>
        <div className={styles.grid}>
          {events.map((event, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imgWrapper}>
                <img src={event.img} alt={event.title} className={styles.img} />
                <div className={styles.dateBadge}>{event.date}</div>
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{event.title}</h3>
                <p className={styles.desc}>{event.desc}</p>
                <div className={styles.details}>
                  <div className={styles.detail}><Clock size={16} /> {event.time}</div>
                  <div className={styles.detail}><MapPin size={16} /> {event.location}</div>
                </div>
                <button className="outline-btn">Reserve Spot</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
