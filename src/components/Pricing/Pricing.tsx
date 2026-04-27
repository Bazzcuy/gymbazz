import styles from './Pricing.module.css';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Privilege',
    price: '$120',
    features: ['All Club Access', 'Towel & Locker Service', 'Standard Equipment', 'Complimentary WiFi'],
    featured: false
  },
  {
    name: 'Ambassador',
    price: '$250',
    features: ['Priority Booking', 'Dedicated Coach', 'Nutritional Planning', 'Private Spa Access', 'Valet Parking'],
    featured: true
  },
  {
    name: 'Infinite',
    price: '$500',
    features: ['24/7 Butler Support', 'Daily Massage', 'Unlimited Supplements', 'Guest Passes', 'Global Club Entry'],
    featured: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className={styles.pricing}>
      <div className="container">
        <h2 className="section-title">Club <span>Membership</span></h2>
        <p className="section-subtitle">Investing in your health is the ultimate luxury. Choose the tier that aligns with your lifestyle.</p>
        <div className={styles.grid}>
          {plans.map((plan, i) => (
            <div key={i} className={`${styles.card} ${plan.featured ? styles.featured : ''}`}>
              <h3 className={styles.name}>{plan.name}</h3>
              <div className={styles.price}>
                <span className={styles.currency}>$</span>{plan.price.replace('$', '')}
                <span className={styles.period}>/month</span>
              </div>
              <ul className={styles.features}>
                {plan.features.map((f, j) => (
                  <li key={j}><Check size={16} className={styles.check} /> {f}</li>
                ))}
              </ul>
              <button className={plan.featured ? 'premium-btn' : 'outline-btn'}>
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
