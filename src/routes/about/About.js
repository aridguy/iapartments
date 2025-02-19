import React from 'react'
import Navbar from '../../components/Navbar'
import AboutIco from "../../Asset/about/about-ico.svg"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from '../../components/Footer';


const About = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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
      {
        <section className='about-hero'>
          <div className="container">
            <div className='row'>
              <div className="col-md-12">
                <div className='mt-5'>
                  <h2 className='text-white fw-bold'>About Us</h2>
                  <button type='button' className='p-2 btn btn-outline-success text-white'>Explore Our Luxery Rooms</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      }

      {
        // section 2 of about us page
        <section className='sect2 mt-5'>
          <div className='container'>
            <div className='row' >
              <h1 style={{ fontWeight: "900", fontSize: "3.3em", color: "#052c65" }}>We are luxury, comfort, <br />affordability and happiness.</h1>
            </div>
            <div className="row">
              <div>
                <p>Founded in 2024, I Apartment Services offers a home of comfort with an atmosphere of peace that will give you a lasting experience.
                  We assure you of a dedicated work team that will give you a satisfactory service for having  some time out with us.
                  We are dependable when it comes to excellence and exceptional service to our guests.
                  We look forward to your patronage as you enjoy a great value for your money.</p>
              </div>
            </div>
            <div className="row mt-5">

              <div className='col-md-6'>
                <div>
                  <img width="100%" src={AboutIco} alt='mision vision cption here' />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='row mt-4'>
                  <div className='col-md-12'>
                    <h1 className='fw-bold' style={{ fontSize: "4em", color: "#052c65" }}>Our Mission</h1>
                    <p className='lead'>At I Apartment Services, we are dedicated to providing high-quality living spaces that prioritize convenience and comfort. Our mission is to redefine urban living by offering exceptional service, modern amenities, and a home that feels truly welcoming.</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-12'>
                    <h1 className='fw-bold' style={{ fontSize: "4em", color: "#052c65" }}>Our Mission</h1>
                    <p className='lead'>High quality, convenience, and comfort are more than just a slogan at I Apartment Services—they define our vision, our mission, and our way of life!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      }

      {
        // our values
        <section className='mt-5 pt-5 container-fluid pb-5' style={{ background: "#052c65" }}>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='row '>
                  <div>
                    <h1 className='fw-bold text-white' style={{ fontSize: "4em", }}>Our Values</h1>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <p className='fw-bold lead text-white' >Community</p>
                    <small className='text-white'>We are a community committed to improving life, united by the belief that it can be better,
                      and we actively work towards making that vision a reality.</small>
                  </div>
                  <div className='col-md-6'>
                    <p className='fw-bold lead text-white' >Innovation</p>
                    <small className='text-white'>
                      From your first step into our properties, you join the 99Apartments family.
                      Our commitment to innovation is evident in every detail you encounter.</small>
                  </div>
                </div>
                <div className='row mt-3'>
                  <div className='col-md-6'>
                    <p className='fw-bold lead text-white' >Transparency</p>
                    <small className='text-white'>We deliver a high-quality, worry-free experience, prioritizing transparency. Open communication policy ensures
                      consistently effective customer engagement.</small>
                  </div>
                  <div className='col-md-6'>
                    <p className='fw-bold lead text-white'>Commitment</p>
                    <small className='text-white'>
                      We embody commitment, determination, and passion. We are a community of dedicated individuals
                      who care deeply and are eager to get involved. Nothing happens by chance.</small>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className="shapeAbout1">
                  <img width="100%" src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='innovative-icon' />
                </div>
              </div>
            </div>
          </div>
        </section>
      }

      {
        // testimonials
        <section className='mt-5 pt-5 container-fluid'>
          <div className='container'>
            <div className='row'>
              <h1 className='fw-bold text-center' style={{ fontSize: "4em", color: "#052c65" }}>We are proven and trusted.</h1>
              <small className="lead text-center">Here's what people have said about us</small>
            </div>
            <div className='row mt-5'>
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
                  <div className='p-4' style={{
                    background: "#052c65",
                    color: "white",
                    padding: "1em",
                    borderRadius: "6px",
                    width: "97%",
                    height: "16em"
                  }}>
                    <div>
                      <p className="lead">My friends and I had an amazing time at the apartment. It felt like home with the scenery and all.</p>
                      <small className="fw-bold">- John Doe</small> <br />
                      <small className="text-white">Lagos, Nigeria</small>
                    </div>
                  </div>
                  <div className='p-4' style={{
                    background: "#052c65",
                    color: "white",
                    padding: "1em",
                    borderRadius: "6px",
                    width: "97%",
                   height: "16em"
                  }}>
                    <div>
                      <p className="lead">My friends and I had an amazing time at the apartment. It felt like home with the scenery and all.</p>
                      <small className="fw-bold">- John Doe</small> <br />
                      <small className="text-white">Lagos, Nigeria</small>
                    </div>
                  </div>
                  <div style={{
                    background: "#052c65",
                    color: "white",
                    padding: "1em",
                    borderRadius: "6px",
                    width: "97%",
                   height: "16em"
                  }}><div>
                      <p className="lead">My friends and I had an amazing time at the apartment. It felt like home with the scenery and all.</p>
                      <small className="fw-bold">- John Doe</small> <br />
                      <small className="text-white">Lagos, Nigeria</small>
                    </div></div>
                  <div style={{
                    background: "#052c65",
                    color: "white",
                    padding: "1em",
                    borderRadius: "6px",
                    width: "97%",
                    height: "16em"
                  }}>
                    <div>
                      <p className="lead">My friends and I had an amazing time at the apartment. It felt like home with the scenery and all.</p>
                      <small className="fw-bold">- John Doe</small> <br />
                      <small className="text-white">Lagos, Nigeria</small>
                    </div>
                  </div>
                  <div style={{
                    background: "#052c65",
                    color: "white",
                    padding: "1em",
                    borderRadius: "6px",
                    width: "97%",
                   height: "16em"

                  }}>
                    <div>
                      <p className="lead">My friends and I had an amazing time at the apartment. It felt like home with the scenery and all.</p>
                      <small className="fw-bold">- John Doe</small> <br />
                      <small className="text-white">Lagos, Nigeria</small>
                    </div>
                  </div>
                  <div style={{
                    background: "#052c65",
                    color: "white",
                    padding: "1em",
                    borderRadius: "6px",
                    width: "97%",
                    height: "16em"
                  }}>
                    <div>
                      <p className="lead">Very nice place to stay, everything was intact and perfect. I enjoyed my stay and would love to come back</p>
                      <small className="fw-bold">- Ayomide</small> <br />
                      <small className="text-grey">Cape Town, South Africa</small>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </section>
      }

      {
        // find house button
        <section className="container mt-5 pt-5">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className='d-flex gap-3'>
                <button className='find_rooms p-3 '> <i className="bi bi-house-gear"></i> Find a Room</button>
                <button className='find_rooms p-3 '> <i className="bi bi-house-check-fill"></i> See Available Rooms</button>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </section>
      }

      <Footer />

    </main>
  )
}

export default About
