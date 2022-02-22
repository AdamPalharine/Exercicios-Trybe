import React from 'react';

import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
      const { name } = this.props;
      const { type } = this.props;
      const { averageWeight } = this.props;
      const { image } = this.props;
      return (
        <div>
          <div>
            <p>Name:{ name }</p>
            <p>Type:{ type }</p>
            <p>:{`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
          </div>
          <div>
            <img src={ image } alt={ name }/>
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