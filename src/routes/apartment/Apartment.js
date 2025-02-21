import React from 'react'
import Navbar from '../../components/Navbar'

const Apartment = () => {
  return (
    <div>
      <Navbar />
      {
        <section className='contact-hero'>
          <div className="container">
            <div className='row'>
              <div className="col-md-12">
                <div className='mt-5'>
                  <h2 className='text-white fw-bold text-uppercase'>See all rooms available at I Apartment</h2>
                  <button type='button' className='p-2 btn btn-outline-success text-white'>Explore Our Rooms!</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
    </div>
  )
}

export default Apartment
