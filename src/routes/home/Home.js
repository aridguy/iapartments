import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import HomeIcone from "../../Asset/stocks/home.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { createClient } from 'contentful';
import Footer from '../../components/Footer';
import Room from "../../Asset/stocks/home.png"

const Home = () => {
  const [roomGallery, setRoomGallery] = useState([]);
  const clientsRoomImages = createClient({
    space: "64wwqieqnr1q",
    accessToken: "XIlTYgvQYexhNDNPAvKX_U92Jk7F6hM0FV2ic3898XM",
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const entries = await clientsRoomImages.getEntries({
          content_type: "roomGallery", // Replace with your actual content type ID
        });
        setRoomGallery(entries.items);
        // console.log("images are loaded here "+entries.items);
      } catch (error) {
        console.error("Error fetching entries:", error);
      }
    };
    getAllEntries();
  }, [clientsRoomImages]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <main>
      <Navbar />
      { // this is hero section | section one 
        <section className='container-fluid pb-5 hero-place' >
          <div className='container mb-5'>
            <div className='row'>
              <div className='col-md-6 text-white mt-5'>
                <div className='mt-5'>
                  <sup>&copy; 2025I Apartment Services</sup>
                </div>
                <div>
                  <h1 className=' hero-text' style={{ fontSize: "4em" }}>Rent, Relax, Repeat </h1>
                  <h3 className=''>Your Ideal Apartment Awaits at IApartment Services!</h3>
                </div>
                <div className='mt-3'>
                  <sup>Are you ready to start the search for your dream home? Look no further than Bangoonan Real Estate.</sup>
                </div>
                <div>
                  <img width="30%" src={HomeIcone} alt='undraw-ico' />
                  <img width="30%" src={HomeIcone} alt='undraw-ico' />
                </div>
                <div className='mt-3 mb-5'>
                  <button type='button' style={{ width: "60%" }} className='p-2 btn btn-outline-success text-white'>Explore Our Luxery Rooms</button>
                </div>
              </div>
              <div className='col-md-1'></div>
              <div className='col-md-5 mt-5'>
                <div className='enq-home-form' style={{ background: "#ffffffe0", borderRadius: "1em", padding: "20px" }}>
                  <div className='text-center'>
                    <p className='text-black fw-600 text-center fw-bold lead'>I Apartment Enq Form</p>
                    <sup className='text-center'>Please provide the following information to help us better <br /> understand your real estate needs.</sup>
                  </div>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-md-1'></div>
                      <div className='col-md-10'>
                        <form>
                          <p>
                            <input type='text' className='form-control' placeholder='your name' />
                          </p>
                          <p>
                            <input type='email' className='form-control' placeholder='your email' />
                          </p>
                          <p>
                            <input type='number' className='form-control' placeholder='your phone' />
                          </p>
                          <div className='text-center'>
                            <p className='text-black fw-600 fw-bold lead'>Room Prefrence</p>
                            <p>
                              <select className="p-2 border rounded form-control">
                                <option value="">Available rooms</option>
                                <option value="single-room-101">Single Room (₦20,000)</option>
                                <option value="single-room-102">Single Room (₦25,000)</option>
                                <option value="single-room-103">Single Room (₦25,000)</option>
                                <option value="shared-sitting-301">A Room with Shared Sitting (₦35,000)</option>
                                <option value="shared-sitting-302">A Room with Shared Sitting (₦40,000)</option>
                                <option value="shared-sitting-303">A Room with Shared Sitting (₦40,000)</option>
                                <option value="kitchen-room-e101">Single Room with Kitchen (₦40,000)</option>
                                <option value="kitchen-room-e102">Single Room with Kitchen (₦30,000)</option>
                                <option value="two-bed-201">Two Bed (₦70,000)</option>
                                <option value="two-bed-202">Two Bed (₦60,000)</option>
                                <option value="three-bed-300">Three Bed (₦100,000)</option>
                                <option value="open-hall-oh">Open Hall (₦120,000)</option>
                                <option value="open-hall-2r">Open Hall + Two ES Rooms (₦150,000)</option>
                                <option value="open-hall-3b">Open Hall + 3 Bed (₦230,000)</option>
                                <option value="open-hall-2r3b">Open Hall + Two ES Rooms + 3 Bed (₦300,000)</option>
                                <option value="full-apartment-fa1">Full Apartment (₦400,000)</option>
                                <option value="full-apartment-fa2">Full Apartment (₦500,000)</option>
                              </select>
                            </p>
                            <p>
                              <select className="p-2 border rounded form-control">
                                <option value="">Select Number of People</option>
                                <option value="2">2 People</option>
                                <option value="5">5 People</option>
                                <option value="8">8 People</option>
                                <option value="40">40 People Max</option>
                                <option value="40-2-2-8">40, 2, 2, 8 People</option>
                                <option value="40-8">40, 8 People</option>
                                <option value="40-party">40 with Party</option>
                                <option value="40-no-party">40 without Party</option>
                              </select>

                            </p>
                            <p>
                              <select className="p-2 border rounded form-control">
                                <option value="">Select Budget</option>
                                <option value="20000">₦20,000</option>
                                <option value="25000">₦25,000</option>
                                <option value="30000">₦30,000</option>
                                <option value="35000">₦35,000</option>
                                <option value="40000">₦40,000</option>
                                <option value="60000">₦60,000</option>
                                <option value="70000">₦70,000</option>
                                <option value="100000">₦100,000</option>
                                <option value="120000">₦120,000</option>
                                <option value="150000">₦150,000</option>
                                <option value="230000">₦230,000</option>
                                <option value="300000">₦300,000</option>
                                <option value="400000">₦400,000</option>
                                <option value="500000">₦500,000</option>
                                <option value="other amounts">Even more ...</option>
                              </select>
                            </p>
                            <p>
                              <textarea className='form-control' placeholder='additional info'></textarea>
                            </p>
                            <button className='btn btn-outline-success'>Get Enquiries</button>
                          </div>
                        </form>
                      </div>
                      <div className='col-md-1'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      }

      {  // this is home section | section 2 
        <section className='container-fluid pt-5' style={{ background: "#394053" }}>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div>
                  <p className='lead fw-bold text-white'> <i className="bi bi-patch-check-fill "></i> Quick View of Our Rooms</p>
                </div>
                <div>
                  <Carousel
                    draggable={true}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    transitionDuration={2000}
                    containerClass="carousel-container"  // ✅ FIXED
                    dotListClass="custom-dot-list-style"  // ✅ FIXED
                    itemClass="carousel-item-padding-40-px"  // ✅ FIXED
                  >

                  {roomGallery && roomGallery.length > 0 ? (
                    roomGallery.map((room) => (
                      <div key={room.sys.id} className="grid-container">
                        <div className='grid-item'>
                          {room.fields.roomGallery?.fields?.file?.url ? (
                            <img
                              width="100%"
                              loading="lazy"
                              src={room.fields.roomGallery.fields.file.url}
                              alt={room.fields.roomGallery.fields.title || 'Room image'}
                            />
                          ) : (
                            <p className='text-white lead'>No images available</p>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className='text-white lead'>No images available</p> // Show a message if empty
                  )}
                  


                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </section>
      }

      {
        // getting to knw the customer section of the application
        <section className='mb-5' style={{ background: "white" }}>
          <div className="container text-black">
            <div className="row mb-5">
              <div className='col-md-12'>
                <p className='lead fw-bold text-center pt-5'>Our rental matchmaker does the heavy lifting</p>
              </div>
            </div>
            <div className='row '>
              <div className='col-md-4' style={{ borderLeft: "1px solid green" }}>
                <i className="bi bi-patch-check-fill text-success" style={{ fontSize: "3em", }}></i>
                <div className='mt-3'>
                  <h2 className='lead fw-bolder'>Getting to know you</h2>
                  <p className=''>You’ll answer a few simple questions so we understand what you are really looking for in your next home.</p>
                </div>
              </div>
              <div className='col-md-4' style={{ borderLeft: "1px solid green" }}>
                <i className="bi bi-patch-check-fill text-success" style={{ fontSize: "3em", }}></i>
                <div className='mt-3'>
                  <h2 className='lead fw-bolder'>Guiding you to savings</h2>
                  <p className=''>Tallying up the value of promotional offers can be confusing. That’s why we show transparent pricing for any apartment with an offered concession.</p>
                </div>
              </div>
              <div className='col-md-4' style={{ borderLeft: "1px solid green" }}>
                <i className="bi bi-patch-check-fill text-success" style={{ fontSize: "3em", }}></i>
                <div className='mt-3'>
                  <h2 className='lead fw-bolder'>Curating top matches</h2>
                  <p className=''>When you add an apartment to your short list, we will compare them and recommend the best properties for you.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      }

      {
        // just some catchy section

      }

      {
        // room listings {all available rooms at i apartment services}
        <section className='pt-3'>
          <div className='container'>
            <div className="row">
              <h2 className='text-success'>Feature Rooms!</h2>
            </div>
            <div className='row'>
              <div className='col-md-3'>
                <div className="card" style={{ width: "18rem" }}>
                  <img className="card-img-top" src={Room} alt="Card cap" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className="card" style={{ width: "18rem" }}>
                  <img className="card-img-top" src={Room} alt="Card cap" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className="card" style={{ width: "18rem" }}>
                  <img className="card-img-top" src={Room} alt="Card cap" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className="card" style={{ width: "18rem" }}>
                  <img className="card-img-top" src={Room} alt="Card cap" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      }

      <Footer />
    </main>
  )
}

export default Home
