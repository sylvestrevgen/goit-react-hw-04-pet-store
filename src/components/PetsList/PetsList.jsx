import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './petsList.module.css';
import PetItem from '../PetItem/PetItem';

const PetsList = ({ pets, match }) => (
  <ul className={styles.list}>
    {pets.map(({ id, name, breed, image }) => (
      <Link key={id} to={`${match.path}/${id}`} className={styles.link}>
        <li className={styles.listItem}>
          <PetItem name={name} breed={breed} image={image} />
        </li>
      </Link>
    ))}
  </ul>
);

PetsList.propTypes = {
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
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};
export default withRouter(PetsList);
