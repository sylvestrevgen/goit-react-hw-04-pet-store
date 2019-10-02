import React, { Component } from 'react';
import pets from '../../initialData/pets.json';
import Pets from '../../components/Pets/Pets';

export default class PetsPage extends Component {
  state = {
    allPets: pets,
  };

  render() {
    const { allPets } = this.state;

    return <Pets pets={allPets} />;
  }
}
