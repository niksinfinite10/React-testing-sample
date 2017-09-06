import React from 'react';
import InputArea from './InputArea';
import BeerList from './BeerList';

class Home extends React.Component {
  constructor() {
    super();
    this.state = { beers: [] };
    this.addItem = this.addItem.bind(this);
  }

  addItem(val) {
    this.setState(prev => ({ beers: prev.beers.concat(val) }));
  }

  render() {
    return (
      <div>
        <InputArea onSubmit={this.addItem} />
        <BeerList items={this.state.beers} />
      </div>
    );
  }
}

export default Home;
