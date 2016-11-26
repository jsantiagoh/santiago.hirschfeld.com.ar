import React from 'react';

const options = {
  weekday: 'short', year: 'numeric', month: 'short',
  day: 'numeric', hour: '2-digit', minute: '2-digit'
};

function FormattedDate(props) {
  return <div>{props.date.toLocaleTimeString('en-gb', options).replace(/,/g, ' ')}</div>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <FormattedDate date={this.state.date} />
    );
  }
}

Clock.propTypes = {
  date: React.PropTypes.object
};

export default Clock;
