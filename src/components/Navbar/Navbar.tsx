'use client';

import { useState } from 'react';
import styles from './Navbar.module.css';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>
          GYM<span>BAZZ</span>
        </div>
        
        <div className={`${styles.linksContainer} ${isOpen ? styles.active : ''}`}>
          <ul className={styles.links}>
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#services" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#facilities" onClick={toggleMenu}>The Space</a></li>
            <li><a href="#trainers" onClick={toggleMenu}>Mentors</a></li>
            <li><a href="#pricing" onClick={toggleMenu}>Membership</a></li>
          </ul>
        </div>

        <div className={styles.actions}>
          <button className="premium-btn">Join</button>
          <button className={styles.menuBtn} onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
