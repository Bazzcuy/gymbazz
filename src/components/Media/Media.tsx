import styles from './Media.module.css';

const videos = [
  {
    title: 'The GYMBAZZ Philosophy',
    id: 'dQw4w9WgXcQ', // Placeholder
    desc: 'An inside look at our training methodology and elite environment.'
  },
  {
    title: 'Mastering the Compound Lifts',
    id: 'dQw4w9WgXcQ', // Placeholder
    desc: 'Tutorial session by our head coaches on perfecting your form.'
  }
];

const Media = () => {
  return (
    <section id="media" className={styles.media}>
      <div className="container">
        <h2 className="section-title">Visual <span>Insights</span></h2>
        <p className="section-subtitle">Documentation of our mentorship programs and high-performance tutorials.</p>
        <div className={styles.grid}>
          {videos.map((video, i) => (
            <div key={i} className={styles.videoCard}>
              <div className={styles.videoWrapper}>
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{video.title}</h3>
                <p className={styles.desc}>{video.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;
