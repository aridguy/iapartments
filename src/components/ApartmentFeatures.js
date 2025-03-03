import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
// import "bootstrap/dist/css/bootstrap.min.css";

const ApartmentFeatures = () => {
    const location = useLocation();

    useEffect(() => {
      AOS.init({
        duration: 1500, // Adjust animation speed
        delay: 300, // Delay before animation starts
        offset: 100, // Offset from top before animation triggers
        once: false, // Repeat animation on every scroll
      });
      AOS.refresh(); // Refresh AOS animations on route change
    }, [location]);
   
    const features = [
        "Lodging",
        "Birthday",
        "Bridal Shower",
        "Photo Shoot",
        "Bachelor Eve",
        "Baby Shower",
        "Get Together",
    ];

    const amenities = [
        "Netflix",
        "Free WiFi",
        "24/7 Electricity",
        "Maximum Security",
        "Secure Parking Space",
        "CCTV",
        "DSTV View",
        "Luxury Furnitures",
    ];

    const unitsAvailable = [
        "3 Beds Presidential",
        "2 Bed Luxury",
        "1 Bed Classic",
        "1 Bedroom Gold",
        "Single Room Silver",
    ];

    return (
        <section >
            <div className="container py-5">
                <div data-aos="fade-right"  data-aos-delay="200" className="text-center mb-5">
                    <h2 className="fw-bold text-primary">🏡 Apartment Features</h2>
                    <p className="text-white">Discover our premium apartment features, top-class amenities, and available units.</p>
                </div>
                <div className="row g-4">
                    {/* Features Section */}
                    <div data-aos="fade-left"  data-aos-delay="500" className="col-md-4">
                        <div className="card shadow-sm border-0 h-100">
                            <div className="card-body d-flex flex-column">
                                <h4 className="text-success fw-bold">✨ Features</h4>
                                <ul className="list-group list-group-flush flex-grow-1">
                                    {features.map((feature, index) => (
                                        <li key={index} className="list-group-item border-0">
                                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Amenities Section */}
                    <div data-aos="fade-left"  data-aos-delay="400" className="col-md-4">
                        <div className="card shadow-sm border-0 h-100">
                            <div className="card-body d-flex flex-column">
                                <h4 className="text-primary fw-bold">🏢 Amenities</h4>
                                <ul className="list-group list-group-flush flex-grow-1">
                                    {amenities.map((amenity, index) => (
                                        <li key={index} className="list-group-item border-0">
                                            <i className="bi bi-star-fill text-warning me-2"></i>
                                            {amenity}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Units Available Section */}
                    <div data-aos="fade-left"  data-aos-delay="300" className="col-md-4">
                        <div className="card shadow-sm border-0 h-100">
                            <div className="card-body d-flex flex-column">
                                <h4 className="text-danger fw-bold">🏠 Units Available</h4>
                                <ul className="list-group list-group-flush flex-grow-1">
                                    {unitsAvailable.map((unit, index) => (
                                        <li key={index} className="list-group-item border-0">
                                            <i className="bi bi-building-fill text-danger me-2"></i>
                                            {unit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ApartmentFeatures;
