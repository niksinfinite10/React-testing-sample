import React from 'react';
import PropTypes from 'prop-types';

const BeerList = ({ items }) => (
  <ul>
    {items ?
      items.map(item =>
        <li key={item}>{item}</li>,
      ) :
      null
    }
  </ul>
);

BeerList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};

BeerList.defaultProps = {
  items: [],
};

export default BeerList;
