import React, { Component, PropTypes } from 'react'
import { Button, Panel } from 'react-bootstrap'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.incrementAsync = this.incrementAsync.bind(this)
    this.incrementIfOdd = this.incrementIfOdd.bind(this)
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrease()
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrease, 1000)
  }

  render() {
    const { value, onIncrease, onDecrease } = this.props
    const title = `Clicked: ${value} times`
    return (
      <Panel header={title} bsStyle="success">
        <Button onClick={() => onIncrease()}> + </Button>
        <Button onClick={() => onDecrease()}> - </Button>
        <Button onClick={() => this.incrementIfOdd()}> Increment if odd </Button>
        <Button onClick={() => this.incrementAsync()}> Increment async </Button>
      </Panel>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired
}

// ------------------------------------ Container ------------------------------------------
// TODO: This should be split into a dumb component and a container
import { connect } from 'react-redux'
import { increase, decrease } from 'actions/count'

const mapStateToProps = (state) => {
  return {
    value: state.count.number
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrease: () => dispatch(increase()),
    onDecrease: () => dispatch(decrease())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
