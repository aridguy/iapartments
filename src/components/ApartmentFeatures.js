import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const ApartmentFeatures = () => {
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
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold text-primary">🏡 Apartment Features</h2>
        <p className="text-muted">Discover our premium apartment features, top-class amenities, and available units.</p>
      </div>

      <div className="row g-4">
        {/* Features Section */}
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body ">
              <h4 className="text-success fw-bold">✨ Features</h4>
              <ul className="list-group list-group-flush">
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
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body ">
              <h4 className="text-primary fw-bold">🏢 Amenities</h4>
              <ul className="list-group list-group-flush">
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
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body ">
              <h4 className="text-danger fw-bold">🏠 Units Available</h4>
              <ul className="list-group list-group-flush">
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
  );
};

export default ApartmentFeatures;
