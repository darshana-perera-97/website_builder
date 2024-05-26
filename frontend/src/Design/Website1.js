import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Website1({ formData, featuresData }) {
  return (
    <div className="no-select">
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: formData.navbarBgColor }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {formData.logoUrl && (
              <img
                src={formData.logoUrl}
                alt="Brand Logo"
                style={{ height: "40px", marginRight: "10px" }}
              />
            )}
            {formData.brandName || "Brand"}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {formData.navLinks.map((link, index) => (
                <li key={index} className="nav-item">
                  <a className="nav-link" href={link.href}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row" id="section1">
          <div className="col-md-6">
            <h1 style={{ color: formData.titleColor }}>
              {formData.title || "Superior SAAS Platform"}
            </h1>
            <p style={{ color: formData.descriptionColor }}>
              {formData.description ||
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
            </p>
            <a
              href={formData.buttonLink}
              className="btn btn-primary"
              style={{
                color: formData.buttonTextColor,
                backgroundColor: formData.buttonBgColor,
              }}
            >
              {formData.buttonText || "Get Started"}
            </a>
          </div>
          <div className="col-md-6">
            <img src={formData.imageUrl} alt="Mockup" className="img-fluid" />
          </div>
        </div>
        <hr />
        <h2
          className="text-center"
          style={{ color: formData.customTitleColor }}
        >
          {formData.customTitle}
        </h2>
        <div className="row" id="section2">
          {featuresData.map((feature, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="text-center">
                <i className={feature.icon} style={{ fontSize: "3em" }}></i>
                <h4 style={{ color: formData.pointHeadingColor }}>
                  {feature.title}
                </h4>
                <p style={{ color: formData.pointDescriptionColor }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: formData.paraBackColor }} id="section3">
        <div className="container">
          <div className="row">
            <h2
              style={{
                color: formData.paraTitleColor,
                textAlign: "center",
              }}
            >
              {formData.paratitle || "About Us"}
            </h2>
            <p
              style={{
                color: formData.paraDescriptionColor,
                textAlign: "center",
              }}
            >
              {formData.paradescription ||
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        {/* Other sections... */}
        <div className="row" id="card-section">
          <h2
            className="text-center"
            style={{ color: formData.customTitleColor }}
          >
            {formData.cardSectionTitle}
          </h2>
          {formData.cards.map((card, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div className="card">
                <img
                  src={card.imageUrl}
                  className="card-img-top"
                  alt={card.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                  <a href={card.link} className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: "#f9f9f9" }} id="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 text-center">
              <h2 style={{ color: "#333" }}>{formData.contactUsTitle}</h2>
              <p>{formData.contactUsDescription}</p>
              <ul className="list-inline mb-0">
                {formData.contactUsWebsite && (
                  <li className="list-inline-item me-4">
                    <a href={formData.contactUsWebsite}>
                      <i className="fa fa-globe"></i>
                    </a>
                  </li>
                )}
                {formData.contactUsWhatsApp && (
                  <li className="list-inline-item me-4">
                    <a href={`https://wa.me/${formData.contactUsWhatsApp}`}>
                      <i className="fa fa-whatsapp"></i>
                    </a>
                  </li>
                )}
                {formData.contactUsLinkedIn && (
                  <li className="list-inline-item me-4">
                    <a href={formData.contactUsLinkedIn}>
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                )}
                {formData.contactUsFacebook && (
                  <li className="list-inline-item">
                    <a href={formData.contactUsFacebook}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
