import React from 'react'

const Sidebar = () => {
  const weather=JSON.parse(localStorage.getItem('weather'));

  return (
    <div className="p-2 flex-fill bd-highlight" style={{ "backgroundColor": "#3A3B3C" }}>
      <h2 className='text-light py-'>Weather Details</h2>
      <hr className='text-light' />

      <div>
        <div className='row'>
          <div className='col-6'>
            <h5 className='text-light'>Temperature</h5>
          </div>
          <div className='col-6'>
            <h5 className='text-light'>{weather.temperature}</h5>
          </div>
        </div>
          <hr className='text-light' />
        <div className='row'>
          <div className='col-6'>
            <h5 className='text-light'>Humidity</h5>
          </div>
          <div className='col-6'>
            <h5 className='text-light'>{weather.humidity}%</h5>
          </div>
        </div>
          <hr className='text-light' />
        <div className='row'>
          <div className='col-6'>
            <h5 className='text-light'>Uv Index</h5>
          </div>
          <div className='col-6'>
            <h5 className='text-light'>{weather.uv}</h5>
          </div>
        </div>
          <hr className='text-light' />
        <div className='row'>
          <div className='col-6'>
            <h5 className='text-light'>Rain</h5>
          </div>
          <div className='col-6'>
            <h5 className='text-light'>Clear</h5>
          </div>
        </div>
          <hr className='text-light' />
      </div>
    </div>
  )
}

export default Sidebar
