import  { useEffect, useState } from 'react';

// Data
import PropretieData from "../Data.json";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Link } from 'react-router-dom';

export default function Gallery() {
  useEffect(() => {
    Fancybox.bind('[data-fancybox]', {});
    return () => {
      Fancybox.destroy();
    };
  }, []);

  const [filter, setFilter] = useState("All");
  const getFilteredProperties = () => {
    if (filter === "All") return PropretieData;
    if (filter === "For Rent") return PropretieData.filter(p => p.tags?.foreRent);
    if (filter === "For Sale") return PropretieData.filter(p => p.tags?.forSale);
    return PropretieData;
  };
  const filteredProperties = getFilteredProperties();

  return (
    <>
      <div className='container page-section my-5 mt-4 fs-5'>
        <Link to='/' className='text-decoration-none'>Home</Link> &nbsp; &gt;&nbsp; <span className="text-muted">Gallery </span>
      </div>
      <div className="container">
        <h1 className="mb-4">Gallery</h1>
        <div className="mb-4 gallery-tab">
          <button
            onClick={() => setFilter("All")}
            className={`btn mx-2${filter === "All" ? " active" : ""}`}
          >All</button>
          <button
            onClick={() => setFilter("For Rent")}
            className={`btn mx-2${filter === "For Rent" ? " active" : ""}`}
          >For Rent</button>
          <button
            onClick={() => setFilter("For Sale")}
            className={`btn mx-2${filter === "For Sale" ? " active" : ""}`}
          >For Sale</button>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {filteredProperties.map((property) => (
            <div className="col-md-6 col-lg-4" key={property.id}>
              <div className="card property-card gellery-card shadow position-relative">
                <img
                  src={property.img}
                  className='card-img-top'
                  alt={property.name}
                  // Si vos images sont dans public/, utilisez `/properties-1.jpg`
                  // Si elles sont dans src/assets/, importez-les ou utilisez require
                />
                <div className="card-body">
                  <p className="card-text">{property.name}</p>
                </div>
                <a
                  href={property.img}
                  data-fancybox="gallery"
                  data-caption={property.name}
                  className='position-absolute gellery-icon'
                  style={{
                    bottom: "10px",
                    right: "10px",
                    zIndex: 10,
                    background: "#fff",
                    padding: "8px",
                    borderRadius: "50%"
                  }}
                >
                  <i className="bi bi-zoom-in"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}