const React = require('react');

class DelayedButton extends React.Component {
  constructor(){
      super();

      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
      event.persist();
      this.props.onDelayedClick(event);
    }

    render() {
      return (
        <button onClick={this.handleClick}>Click me!</button>
      );
    }

}

module.exports = DelayedButton
