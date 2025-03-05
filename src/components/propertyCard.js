import React, { useEffect, useState } from "react";
import { createClient } from 'contentful';
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

const PropertyCards = () => {
    const [allApartments, setAllApartments] = useState([]);

    const clientsRoomImages = createClient({
        space: "64wwqieqnr1q",
        accessToken: "ktJSB2fkJEfug_8zQwC9HjcH_d9Pm_-9Aac0sdtm5O0",
    });
    const location = useLocation();
    useEffect(() => {
        const getAllEntries = async () => {
            try {
                const entries = await clientsRoomImages.getEntries({
                    content_type: "apartment",
                });
                setAllApartments(entries.items);
                // console.log(entries.items);
            } catch (error) {
                console.error("Error fetching entries:", error);
            }
        };
        getAllEntries();
    },[]);
    useEffect(() => {
        AOS.init({
          duration: 1500, // Adjust animation speed
          delay: 300, // Delay before animation starts
          offset: 100, // Offset from top before animation triggers
          once: false, // Repeat animation on every scroll
        });
        AOS.refresh(); // Refresh AOS animations on route change
      }, [location]);

    return (
        <div className="container mt-4">
            <div className="row" data-aos="fade-left" data-aos-delay="300">
                {allApartments.map((apartment) => {
                    const {
                        location,
                        name,
                        numberOfBathroom,
                        numberOfBeds,
                        pricePerNight,
                        // roomSizePerSqrFeet,
                        roomImage
                    } = apartment.fields;

                    return (
                        <div key={apartment.sys.id} className="col-md-4 col-lg-3 mb-4">
                            <div className="card shadow-sm border-0 h-100 d-flex flex-column">
                                <div className="position-relative">
                                    {/* Image Display */}
                                    <img
                                        src={roomImage?.fields?.file?.url || "https://via.placeholder.com/300"}
                                        className="card-img-top"
                                        alt={name}
                                        style={{
                                            width: "100%",
                                            height: "180px", 
                                            objectFit: "cover"
                                        }}
                                    />
                                    {/* Status Badge */}
                                    <span
                                        className="badge position-absolute px-3 py-2 bg-success text-white"
                                        style={{ top: "10px", left: "10px" }}
                                    >
                                        For Rent
                                    </span>
                                </div>
                                <div className="card-body d-flex flex-column justify-content-between" style={{ minHeight: "180px" }}>
                                    <h5 className="fw-bold">
                                        {pricePerNight ? `₦${pricePerNight}` : "Price not available"}|<sub>Per Night</sub>
                                    </h5>
                                    <h6 className="text-dark text-truncate" title={name}>{name}</h6>
                                    <p className="text-muted small mb-2 text-truncate" title={location}>{location}</p>
                                    <div className="d-flex align-items-center text-muted small">
                                        <small className="me-3">
                                            <i className="bi bi-house-door"></i> {numberOfBeds} Beds
                                        </small>
                                        <small className="me-3">
                                            <i className="bi bi-droplet"></i> {numberOfBathroom} Baths
                                        </small>
                                        <small>
                                            <i className="bi bi-display"></i> Display 
                                        </small>
                                        <small>
                                            <i className="bi bi-wifi"></i> Wifi
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PropertyCards;
