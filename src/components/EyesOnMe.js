// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
  handleFocus = () => {
    console.log('Good!');
  }

  handleBlur = () => {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <button onFocus={this.handleFocus} onBlur={this.handleBlur}>
        Eyes on me
      </button>
    );
  }
}

export default EyesOnMe;