import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styles from './petDetails.module.css';

const PetDetails = ({
  pet: { name, image, age, gender, color, breed, description },
  history,
}) => {
  const handleReturnToPets = () => history.push('/pets');

  return (
    <div className={styles.details}>
      <button
        type="button"
        onClick={handleReturnToPets}
        className={styles.button}
      >
        <i className={`material-icons ${styles.icon}`}>arrow_back</i>Return
      </button>
      <h2 className={styles.heading}>{`All about ${name}`}</h2>
      <div className={styles.baseContent}>
        <img src={image} alt={breed} className={styles.img} />
        <div className={styles.info}>
          <span className={styles.infoLine}>
            <span className={styles.bold}>Age: </span>
            {age}
          </span>
          <span className={styles.infoLine}>
            <span className={styles.bold}>Gender: </span>
            {gender}
          </span>
          <span className={styles.infoLine}>
            <span className={styles.bold}>Color: </span>
            {color}
          </span>
          <span className={styles.infoLine}>
            <span className={styles.bold}>Breed: </span>
            {breed}
          </span>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

PetDetails.propTypes = {
  pet: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(PetDetails);
