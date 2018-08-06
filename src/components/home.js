import React, { Component } from 'react';

import header from './header';
import Card from './card';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        { header() }
        <Card />
      </div>
    );
  }
}
