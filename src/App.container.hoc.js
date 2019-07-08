import React, { Component } from 'react'

const API_URL = "https://api.myjson.com/bins/jw3rg"

const withData = (C) => {
  class DataContainer extends Component {
    state = {
      data: [],
      error: '',
      loading: true,
    }

    componentWillMount() {
      fetch(API_URL)
        .then(response => response.json())
        .then(data => this.setState({ data, loading: false }))
        .catch(error => this.setState({ error, loading: false }))
    }

    render() {
      const { loading, error, data } = this.state
      if (loading) return <div>loading</div>
      if (error) return <div>error</div>

      return (
        <C
          data={data}
          {...this.props}
        />
      )
    }
  }
  return DataContainer
}

export default withData
