import React from 'react';
import MainMap from './map.jpg';

class Home extends React.Component {
  render() {
    return (
      <div>
        <img id="mapid" src={ MainMap } />
      </div>
    );
  }
}

export default Home;
