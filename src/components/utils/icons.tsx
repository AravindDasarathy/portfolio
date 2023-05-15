import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faAnglesLeft, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export function LeftArrow() {
  return (
    <FontAwesomeIcon
      icon={faAnglesLeft}
      className="fa-duotone fa-angles-right fa-beat-fade arrow-icons"
      fixedWidth
    />
  );
}

export function RightArrow() {
  return (
    <FontAwesomeIcon
      icon={faAnglesRight}
      className="fa-duotone fa-angles-left fa-beat-fade arrow-icons"
      fixedWidth
    />
  );
}

export function Github() {
  return (
    <FontAwesomeIcon
      icon={faGithubSquare}
      className="fa-duotone fa-github-square social-icons fa-beat-fade"
      fixedWidth
      color='#191919'
    />
  );
}

export function LinkedIn() {
  return (
    <FontAwesomeIcon
      icon={faLinkedin}
      className="fa-duotone fa-linkedin social-icons fa-beat-fade"
      fixedWidth
      color='#191919'
    />
  );
}

export function Email() {
  return (
    <FontAwesomeIcon
      icon={faEnvelope}
      className="fa-duotone fa-envelope social-icons fa-beat-fade"
      fixedWidth
      color='#191919'
    />
  );
}
