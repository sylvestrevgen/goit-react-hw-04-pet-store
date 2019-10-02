import React from 'react';
import PropTypes from 'prop-types';
import styles from './petItem.module.css';

const PetItem = ({ name, breed, image }) => (
  <div className={styles.pet}>
    <img src={image} alt={breed} className={styles.img} />
    <h3 className={styles.caption}>{name}</h3>
  </div>
);

PetItem.propTypes = {
  name: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default PetItem;
