import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pets from '../../initialData/pets.json';
import PetDetails from '../../components/PetDetails/PetDetails';

export default class PetDetailsPage extends Component {
  state = { selectedPet: null };

  componentDidMount() {
    const { match } = this.props;
    const pet = pets.find(({ id }) => id === match.params.id);
    this.setState({
      selectedPet: pet,
    });
  }

  render() {
    const { selectedPet } = this.state;

    return selectedPet && <PetDetails pet={selectedPet} />;
  }
}

PetDetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
