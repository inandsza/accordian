import React, { Component } from 'react'

const withState = (C) => {
  class StateContainer extends Component {
    state =  {
      openIndex: 0
    }

    handleToggle = (openIndex) =>
      this.setState({ openIndex })

    render() {
      return (
        <C
          handleToggle={this.handleToggle}
          {...this.props}
          {...this.state}
        />
      )
    }
  }
  return StateContainer
}

export default withState
