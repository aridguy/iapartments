import React from 'react'

const Footer = () => {
    return (
        <div>

            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        </a>
                        <span className="mb-3 mb-md-0 text-body-secondary">© I Apartment Services {new Date().getFullYear()}</span> <br />

                    </div>
                    <div>
                        <sup >designs / developed by <a style={{color: "blue"}} href="https://idowu-ariyo-cv.netlify.app/">codetechs</a></sup>
                    </div>
                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a className="text-body-secondary" href="/"><i className="bi bi-facebook"></i></a></li>
                        <li className="ms-3"><a className="text-body-secondary" href="/"><i className="bi bi-instagram"></i></a></li>
                        <li className="ms-3"><a className="text-body-secondary" href="/"><i className="bi bi-twitter-x"></i></a></li>
                        <li className="ms-3"><a className="text-body-secondary" href="/"><i className="bi bi-linkedin"></i></a></li>
                    </ul>
                </footer>
            </div>

        </div>
    )
}

export default Footer
