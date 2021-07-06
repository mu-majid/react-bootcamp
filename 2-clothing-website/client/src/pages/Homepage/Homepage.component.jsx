import React from 'react';
import Directory from '../../components/Directory/directory.component';
import { HomePageContainer } from './Homepage.styles';

const Homepage = (props) => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
}

export default Homepage;