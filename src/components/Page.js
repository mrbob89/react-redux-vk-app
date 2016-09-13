import React, { PropTypes, Component } from 'react'

export default class Page extends Component {
  onYearBtnClick(e) {
    this.props.getPhotos(+e.target.textContent)
  }

  render() {
    const { year, photos, fetching } = this.props
    return <div className='ib page'>
      <p>
        <button className='btn' onClick={::this.onYearBtnClick}>2016</button>
        <button className='btn' onClick={::this.onYearBtnClick}>2015</button>
        <button className='btn' onClick={::this.onYearBtnClick}>2014</button>
      </p>
      <h3>{year} year</h3>
      {
        fetching ?
        <p>Loading...</p>
        :
        <p>You have {photos.length} photoes.</p>
      }
    </div>
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired
}
