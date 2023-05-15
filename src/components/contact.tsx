import React from 'react';
import { Email, LinkedIn, Github } from './utils/icons';

export default function ContactSection(props: any) {
  const links = {
    email: 'mailto:dasarathy.ar@northeastern.edu',
    linkedin: 'https://www.linkedin.com/in/aravind-dasarathy-149206126/',
    github: 'https://github.com/aravind-dasarat'
  };

  const styles = {
    iconContainer: {
      alignItems: 'center',
      display: 'inline-flex',
      alignSelf: 'center'
    },
    icon: {
      cursor: 'pointer',
      width: 'auto',
      padding: 5
    }
  };

  return (
    <div className={`row ${props?.class}`} style={{ ...styles.iconContainer }}>
        <span style={{ fontSize: '1.25rem', ...styles.icon }}>
          <a href={links.email}><Email /></a>
        </span>
        <span style={styles.icon}>
          <a href={links.linkedin}><LinkedIn /></a>
        </span>
        <span style={styles.icon}>
          <a href={links.github}><Github /></a>
        </span>
    </div>
  );
}
