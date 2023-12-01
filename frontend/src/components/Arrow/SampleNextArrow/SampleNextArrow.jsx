import PropTypes from 'prop-types';
import styles from './SampleNextArrow.module.css';

export const SampleNextArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.next__arrow} ${styles.custom__next__arrow}`}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={onClick}
    />
  );
};

SampleNextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};
