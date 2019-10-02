import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styles from './app.module.css';
import Navbar from '../Navbar/Navbar';
import HomePage from '../../pages/HomePage/HomePage';
import AboutPage from '../../pages/AboutPage/AboutPage';
import PetsPage from '../../pages/PetsPage/PetsPage';
import PetDetailsPage from '../../pages/PetDetailsPage/PetDetailsPage';

const App = () => (
  <div className={styles.app}>
    <Navbar />
    <div className={styles.container}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/pets/:id" component={PetDetailsPage} />
        <Route path="/pets" component={PetsPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  </div>
);

export default App;
