import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 5000); // Message disappears after 5 seconds

      return () => clearTimeout(timer); // Cleanup timeout on unmount
    }
  }, [success]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Show loader when form submission starts

    emailjs
      .sendForm(
        "service_0ref7em", // Replace with your Service ID
        "template_iteb228", // Replace with your Template ID
        form.current,
        "SFnvl1enJnX0YYdDM" // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setSuccess(true);
          setLoading(false); // Hide loader after successful submission
          form.current.reset(); // Reset the form
          setTimeout(() => setSuccess(false), 5000); // Hide success message after 5 seconds
        },
        (error) => {
          console.log("Error:", error.text);
        }
      );
  };
  return (
    <div>
      <Navbar />
      {
        <section className='contact-hero'>
          <div className="container">
            <div className='row'>
              <div className="col-md-12">
                <div className='mt-5'>
                  <h2 className='text-white fw-bold'>Contact Us</h2>
                  <button type='button' className='p-2 btn btn-outline-success text-white'>Contact Us Today!</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      }

      {
        // contact section contact page
        <section className='mt-5 pt-t sections'>
          <div className="container">
            <div className="row">
              <div className='col-md-8'>
                <h1 className="text-black fw-bolder">Contact Us</h1>
                <p className='lead'>
                  Our focus on luxury and comfort, combined with affordability, ensures an incredible stay. We work as a dedicated team to provide
                  outstanding service from start to finish. Count on us to be always here to help and make your experience exceptional.
                </p>
              </div>
              <div className="col-md-4">
                <p className="lead"></p>
              </div>
            </div>

            <div className="row">
              <section className="contact-page-sec">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="contact-info">
                        <div className="contact-info-item">
                          <div className="contact-info-icon">
                            <i className="fas fa-map-marked"></i>
                          </div>
                          <div className="contact-info-text">
                            <h2>address</h2>
                            <span>Plot 23, Oshin Street, Off Billings Way,  </span>
                            <span>Alausa Ikeja</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="contact-info">
                        <div className="contact-info-item">
                          <div className="contact-info-icon">
                            <i className="fas fa-envelope"></i>
                          </div>
                          <div className="contact-info-text">
                            <h2>E-mail</h2>
                            <span>info@iapartmentservices.com</span>
                            <span>ronkedao@gmail.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="contact-info">
                        <div className="contact-info-item">
                          <div className="contact-info-icon">
                            <i className="fas fa-clock"></i>
                          </div>
                          <div className="contact-info-text">
                            <h2>office time</h2>
                            <span className="">24/7</span>
                            <span className="">24/7</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-8">
                      <div className="contact-page-form">
                        <h2>Get in Touch</h2>
                        {success && <p className="text-green-500">Message sent successfully!</p>}
                        <form ref={form} onSubmit={sendEmail}>
                          <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <div className="single-input-field">
                                <input type="text" placeholder="Your Name" name="name" required />
                              </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <div className="single-input-field">
                                <input type="email" placeholder="E-mail" name="email" required />
                              </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <div className="single-input-field">
                                <input type="text" placeholder="Phone Number" name="phone" />
                              </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <div className="single-input-field">
                                <input type="text" placeholder="Subject" name="subject" />
                              </div>
                            </div>
                            <div className="col-md-12 message-input">
                              <div className="single-input-field">
                                <textarea placeholder="Write Your Message" name="message"></textarea>
                              </div>
                            </div>
                            <div className="single-input-fieldsbtn">
                              <button type="submit" className="submit-btn" disabled={loading}>
                                {loading ? "Sending..." : "Send Now"}
                                {loading && <div className="spinner-border text-light spinner-sm" role="status"></div>}
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="contact-page-map">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9426.344598635427!2d3.3485566275918135!3d6.610882047887854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93cac5ddea01%3A0xd8ff74cb797c53bf!2s23%20Oshin%20St%2C%20Oregun%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1740153092887!5m2!1sen!2sng"
                          width="100%"
                          height="450"
                          allowFullScreen=""
                          loading="lazy"
                          title='I Apartment Services'
                          referrerPolicy="no-referrer-when-downgrade"></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      }
      <Footer />
    </div>
  )
}

export default Contact
