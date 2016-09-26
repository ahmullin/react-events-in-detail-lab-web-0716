const React = require('react');


class CoordinatesButton extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    var xPos = event.clientX;
    var yPos = event.clientY;
    var coordinates = [xPos, yPos];
    this.props.onReceiveCoordinates(coordinates);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click me!</button>
    );
  }
}

module.exports = CoordinatesButton
