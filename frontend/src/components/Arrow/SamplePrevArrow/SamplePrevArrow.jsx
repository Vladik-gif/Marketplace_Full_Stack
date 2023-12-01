import PropTypes from 'prop-types';
import styles from './SamplePrevArrow.module.css';

export const SamplePrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.prev__arrow} ${styles.custom__prev__arrow}`}
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

SamplePrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};
