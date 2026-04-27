import styles from './Schedule.module.css';

const schedule = [
  { time: '07:00 AM', mon: 'Vinyasa Flow', tue: 'Metabolic HIIT', wed: 'Classical Pilates', thu: 'Power Sculpt', fri: 'Vinyasa Flow', sat: 'Barre Elite' },
  { time: '10:00 AM', mon: 'Power Sculpt', tue: 'Vinyasa Flow', wed: 'Dynamic Boxing', thu: 'Metabolic HIIT', fri: 'Power Sculpt', sat: 'Dynamic Boxing' },
  { time: '04:00 PM', mon: 'Dynamic Boxing', tue: 'Power Sculpt', wed: 'Metabolic HIIT', thu: 'Vinyasa Flow', fri: 'Dynamic Boxing', sat: 'Metabolic HIIT' },
  { time: '07:00 PM', mon: 'Metabolic HIIT', tue: 'Dynamic Boxing', wed: 'Power Sculpt', thu: 'Classical Pilates', fri: 'Metabolic HIIT', sat: 'Closed' }
];

const Schedule = () => {
  return (
    <section id="schedule" className={styles.schedule}>
      <div className="container">
        <h2 className="section-title">The <span>Schedule</span></h2>
        <p className="section-subtitle">Plan your journey with our curated selection of high-performance classes.</p>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Time</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, i) => (
                <tr key={i}>
                  <td className={styles.time}>{row.time}</td>
                  <td>{row.mon}</td>
                  <td>{row.tue}</td>
                  <td>{row.wed}</td>
                  <td>{row.thu}</td>
                  <td>{row.fri}</td>
                  <td>{row.sat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
