import React from 'react';

import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
      const {pokemon: { id, name, type, averageWeight, image } } = this.props;
      return (
        <div className="pokemon">
          <div>
            <p>Id: { id }</p>
            <p>Name: { name }</p>
            <p>Type: { type }</p>
            <p>{`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
          </div>
          <div>
            <img src={ image } alt={`${name} sprite`}/>
          </div>
        </div>
      );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};
  
  export default Pokemon;