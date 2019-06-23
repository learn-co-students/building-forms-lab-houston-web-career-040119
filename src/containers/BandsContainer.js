import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput />
        <ul>
          {this.props.bands.map(band => <li>{band.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default connect(state => ({bands: state.bands}))(BandsContainer);
