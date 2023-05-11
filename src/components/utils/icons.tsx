import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';

export function LeftArrow() {
  return (
    <FontAwesomeIcon
      icon={faAnglesLeft}
      className="fa-duotone fa-angles-right fa-beat-fade fa-2xl arrow-icons"
    />
  );
}

export function RightArrow() {
  return (
    <FontAwesomeIcon
      icon={faAnglesRight}
      className="fa-duotone fa-angles-left fa-beat-fade fa-2xl arrow-icons"
    />
  );
}
