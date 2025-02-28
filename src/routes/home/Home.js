import React, { useEffect, useRef, useState } from 'react'

import emailjs from "@emailjs/browser";
import Navbar from '../../components/Navbar'
import HomeIcone from "../../Asset/stocks/home.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { createClient } from 'contentful';
import Footer from '../../components/Footer';
import Room from "../../Asset/stocks/home.png"
import Faq from '../../faq/Faq';
import Swal from 'sweetalert2';
import ApartmentFeatures from '../../components/ApartmentFeatures';

const Home = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    room_preference: "",
    num_people: "",
    budget: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_0ref7em";
    const templateID = "template_1cwd22d";
    const publicKey = "SFnvl1enJnX0YYdDM"; // Found in EmailJS Dashboard

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        // console.log("Email sent successfully!", response);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Enquiries sent successfully!"
        });
        formRef.current.reset(); // ✅ Clears the form


      })
      .catch((error) => {
        // console.error("Error sending email:", error);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 7000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "error",
          title: "Enquiries not sent, please try again!!"
        });
        formRef.current.reset(); // ✅ Clears the form
      });
  };
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
  }, );

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
                      <div className="col-md-10">
                        <form onSubmit={handleSubmit} ref={formRef}>
                          <p>
                            <input type="text" name="name" className="form-control" placeholder="Your Name" onChange={handleChange} required />
                          </p>
                          <p>
                            <input type="email" name="email" className="form-control" placeholder="Your Email" onChange={handleChange} required />
                          </p>
                          <p>
                            <input type="number" name="phone" className="form-control" placeholder="Your Phone" onChange={handleChange} required />
                          </p>
                          <div className="text-center">
                            <p className="text-black fw-600 fw-bold lead">Room Preference</p>
                            <p>
                              <select name="room_preference" className="p-2 border rounded form-control" onChange={handleChange} required>
                                <option value="">Available rooms</option>
                                <option value="single-room-101">Single Room (₦20,000)</option>
                                <option value="shared-sitting-301">A Room with Shared Sitting (₦35,000)</option>
                                <option value="full-apartment-fa1">Full Apartment (₦400,000)</option>
                                {/* Add other options */}
                              </select>
                            </p>
                            <p>
                              <select name="num_people" className="p-2 border rounded form-control" onChange={handleChange} required>
                                <option value="">Select Number of People</option>
                                <option value="2">2 People</option>
                                <option value="40">40 People Max</option>
                              </select>
                            </p>
                            <p>
                              <select name="budget" className="p-2 border rounded form-control" onChange={handleChange} required>
                                <option value="">Select Budget</option>
                                <option value="20000">₦20,000</option>
                                <option value="400000">₦400,000</option>
                              </select>
                            </p>
                            <p>
                              <textarea name="message" className="form-control" placeholder="Additional Info" onChange={handleChange}></textarea>
                            </p>
                            <button type="submit" className="btn btn-outline-success">Get Enquiries</button>
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
                    // customTransition="all .5"
                    transitionDuration={2000}
                    containerclassName="carousel-container "
                    dotListclassName="custom-dot-list-style"
                    itemclassName="carousel-item-padding-40-px"
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
        <section className='mb-5' style={{ background: "white" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
              <ApartmentFeatures />
              </div>
            </div>
          </div>
        </section>
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

      {
        // Faq section
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <img style={{ marginTop: "15em" }} className="" width="100%" src="https://static.vecteezy.com/system/resources/thumbnails/019/872/929/small_2x/3d-minimal-faq-sign-answers-to-frequently-asked-questions-message-icon-with-a-faq-text-3d-illustration-free-png.png" alt='faqs' />
              </div>
              <div className="col-md-8">
                <Faq />
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
