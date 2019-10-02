import React from 'react';
import PropTypes from 'prop-types';
import styles from './pets.module.css';
import PetsList from '../PetsList/PetsList';

const Pets = ({ pets }) => (
  <div className={styles.pets}>
    <h2 className={styles.heading}>Available pets</h2>
    <PetsList pets={pets} />
  </div>
);

Pets.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      gender: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      breed: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Pets;
