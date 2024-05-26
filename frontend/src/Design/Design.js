import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Website1 from "./Website1";
import Preview from "./Preview";

const Design = () => {
  const [formData, setFormData] = useState({
    title: "",
    paratitle: "About Us",
    description: "",
    paradescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "",
    buttonLink: "",
    titleColor: "#000000",
    descriptionColor: "#000000",
    buttonTextColor: "#ffffff",
    buttonBgColor: "#007bff",
    imageUrl: "https://via.placeholder.com/400",
    customTitle: "Key Features",
    customTitleColor: "#000000",
    pointHeadingColor: "#000000",
    pointDescriptionColor: "#000000",
    paraTitleColor: "#000000",
    paraDescriptionColor: "#000000",
    paraBackColor: "#ffffff",
    brandName: "Brand",
    logoUrl: "",
    navbarBgColor: "#f8f9fa",
    navLinks: [
      { text: "Home", href: "#section1" },
      { text: "Features", href: "#section2" },
      { text: "Contact", href: "#section3" },
    ],
    useUploadedLogo: false,
    cardSectionTitle: "Card Section Title",
    cards: [
      {
        imageUrl: "https://via.placeholder.com/150",
        title: "Card Title 1",
        description: "This is a description for card 1.",
        link: "#",
      },
      {
        imageUrl: "https://via.placeholder.com/150",
        title: "Card Title 2",
        description: "This is a description for card 2.",
        link: "#",
      },
      {
        imageUrl: "https://via.placeholder.com/150",
        title: "Card Title 3",
        description: "This is a description for card 3.",
        link: "#",
      },
      {
        imageUrl: "https://via.placeholder.com/150",
        title: "Card Title 4",
        description: "This is a description for card 4.",
        link: "#",
      },
    ],
    contactUsTitle: "Contact Us",
    contactUsDescription: "Get in touch with us!",
    contactUsWebsite: "",
    contactUsWhatsApp: "",
    contactUsLinkedIn: "",
    contactUsFacebook: "",
  });

  const [featuresData, setFeaturesData] = useState([
    {
      icon: "fa fa-code",
      title: "Easy Integration",
      description:
        "Integrate our platform seamlessly with your existing tools and workflows.",
    },
    {
      icon: "fa fa-cogs",
      title: "Customizable",
      description:
        "Customize our platform to fit the unique needs of your business.",
    },
    {
      icon: "fa fa-laptop",
      title: "Responsive Design",
      description:
        "Enjoy a responsive design that works flawlessly across all devices.",
    },
    {
      icon: "fa fa-lock",
      title: "Secure",
      description:
        "Rest assured that your data and transactions are secure with our robust security measures.",
    },
    {
      icon: "fa fa-support",
      title: "24/7 Support",
      description:
        "Get round-the-clock support from our team of experts whenever you need assistance.",
    },
  ]);

  const handleContactUsInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCardInputChange = (index, field, value) => {
    const updatedCards = [...formData.cards];
    updatedCards[index][field] = value;
    setFormData((prevData) => ({
      ...prevData,
      cards: updatedCards,
    }));
  };

  const handleAddCard = () => {
    setFormData((prevData) => ({
      ...prevData,
      cards: [
        ...prevData.cards,
        { imageUrl: "", title: "", description: "", link: "" },
      ],
    }));
  };

  const handleDeleteCard = (index) => {
    const updatedCards = formData.cards.filter((_, i) => i !== index);
    setFormData((prevData) => ({
      ...prevData,
      cards: updatedCards,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleToggleChange = (e) => {
    const { checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      useUploadedLogo: checked,
      logoUrl: checked ? "" : prevFormData.logoUrl, // Reset the logoUrl if the user toggles off the upload option
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((prevData) => ({
        ...prevData,
        logoUrl: reader.result,
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleAddFeatureData = (feature) => {
    setFeaturesData([...featuresData, feature]);
  };

  const handleUpdateFeatureData = (index, updatedFeature) => {
    const updatedFeatures = [...featuresData];
    updatedFeatures[index] = updatedFeature;
    setFeaturesData(updatedFeatures);
  };

  const handleDeleteFeatureData = (index) => {
    const updatedFeatures = [...featuresData];
    updatedFeatures.splice(index, 1);
    setFeaturesData(updatedFeatures);
  };

  const handleNavLinkChange = (index, name, value) => {
    const updatedNavLinks = [...formData.navLinks];
    updatedNavLinks[index][name] = value;
    setFormData((prevData) => ({
      ...prevData,
      navLinks: updatedNavLinks,
    }));
  };
  const handleCardImageUpload = (index, file) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const updatedCards = [...formData.cards];
      updatedCards[index].imageUrl = reader.result;
      setFormData((prevData) => ({
        ...prevData,
        cards: updatedCards,
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Customize Website</h2>
          <button
            onClick={() => {
              console.log({
                formData,
                featuresData,
              });
            }}
          >
            Submit
          </button>
          <Tabs defaultActiveKey="TopBar" id="design-tabs">
            <Tab eventKey="TopBar" title="Top Bar">
              <form>
                <div className="mb-3">
                  <label htmlFor="titleInput" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="titleInput"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="titleColorInput" className="form-label">
                    Title Color
                  </label>
                  <input
                    type="color"
                    className="form-control"
                    id="titleColorInput"
                    name="titleColor"
                    value={formData.titleColor}
                    onChange={handleInputChange}
                    style={{ width: "50px" }} // Adjust width here
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="descriptionInput" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="descriptionInput"
                    name="description"
                    rows="3"
                    value={formData.description}
                    onChange={handleInputChange}
                  ></textarea>
                  <label htmlFor="descriptionColorInput" className="form-label">
                    Description Color
                  </label>
                  <input
                    type="color"
                    className="form-control"
                    id="descriptionColorInput"
                    name="descriptionColor"
                    value={formData.descriptionColor}
                    onChange={handleInputChange}
                    style={{ width: "50px" }} // Adjust width here
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="buttonTextInput" className="form-label">
                    Button Text
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="buttonTextInput"
                    name="buttonText"
                    value={formData.buttonText}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="buttonLinkInput" className="form-label">
                    Button Link
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="buttonLinkInput"
                    name="buttonLink"
                    value={formData.buttonLink}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="buttonTextColorInput" className="form-label">
                    Button Text Color
                  </label>
                  <input
                    type="color"
                    className="form-control"
                    id="buttonTextColorInput"
                    name="buttonTextColor"
                    value={formData.buttonTextColor}
                    onChange={handleInputChange}
                    style={{ width: "50px" }} // Adjust width here
                  />
                  <label htmlFor="buttonBgColorInput" className="form-label">
                    Button Background Color
                  </label>
                  <input
                    type="color"
                    className="form-control"
                    id="buttonBgColorInput"
                    name="buttonBgColor"
                    value={formData.buttonBgColor}
                    onChange={handleInputChange}
                    style={{ width: "50px" }} // Adjust width here
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="imageInput" className="form-label">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="imageInput"
                    name="image"
                    onChange={handleImageUpload}
                  />
                </div>
              </form>
            </Tab>
            <Tab eventKey="customize" title="Customize">
              <form>
                <label htmlFor="titleInput" className="form-label">
                  Features Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="titleInput"
                  name="customTitle"
                  value={formData.customTitle}
                  onChange={handleInputChange}
                />
                <label htmlFor="titleColorInput" className="form-label">
                  Features Title Color
                </label>
                <input
                  type="color"
                  className="form-control"
                  id="titleColorInput"
                  name="customTitleColor"
                  value={formData.customTitleColor}
                  onChange={handleInputChange}
                  style={{ width: "50px" }} // Adjust width here
                />
                <label htmlFor="pointHeadingColorInput" className="form-label">
                  Point Heading Color
                </label>
                <input
                  type="color"
                  className="form-control"
                  id="pointHeadingColorInput"
                  name="pointHeadingColor"
                  value={formData.pointHeadingColor}
                  onChange={handleInputChange}
                  style={{ width: "50px" }} // Adjust width here
                />
                <label
                  htmlFor="pointDescriptionColorInput"
                  className="form-label"
                >
                  Point Description Color
                </label>
                <input
                  type="color"
                  className="form-control"
                  id="pointDescriptionColorInput"
                  name="pointDescriptionColor"
                  value={formData.pointDescriptionColor}
                  onChange={handleInputChange}
                  style={{ width: "50px" }} // Adjust width here
                />
                <p>Point modification</p>
                {featuresData.map((feature, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      className="form-control mb-2"
                      value={feature.title}
                      onChange={(e) =>
                        handleUpdateFeatureData(index, {
                          ...feature,
                          title: e.target.value,
                        })
                      }
                    />
                    <textarea
                      className="form-control mb-2"
                      value={feature.description}
                      onChange={(e) =>
                        handleUpdateFeatureData(index, {
                          ...feature,
                          description: e.target.value,
                        })
                      }
                    />
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDeleteFeatureData(index)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="btn btn-primary mt-3"
                  onClick={() =>
                    handleAddFeatureData({
                      title: "",
                      description: "",
                      icon: "fa fa-newspaper-o", // Default icon
                    })
                  }
                >
                  Add New Feature
                </button>
              </form>
            </Tab>
            <Tab eventKey="customize3" title="Para">
              <label htmlFor="titleInput" className="form-label">
                Para Title
              </label>
              <input
                type="text"
                className="form-control"
                id="titleInput"
                name="paratitle"
                value={formData.paratitle}
                onChange={handleInputChange}
              />
              <label htmlFor="titleColorInput" className="form-label">
                Para heading Color
              </label>
              <input
                type="color"
                className="form-control"
                id="titleColorInput"
                name="paraTitleColor"
                value={formData.paraTitleColor}
                onChange={handleInputChange}
                style={{ width: "50px" }} // Adjust width here
              />
              <label htmlFor="descriptionInput" className="form-label">
                Para Description
              </label>
              <input
                type="text"
                className="form-control"
                id="descriptionInput"
                name="paradescription"
                value={formData.paradescription}
                onChange={handleInputChange}
              />
              <label htmlFor="descriptionColorInput" className="form-label">
                Para Description Color
              </label>
              <input
                type="color"
                className="form-control"
                id="descriptionColorInput"
                name="paraDescriptionColor"
                value={formData.paraDescriptionColor}
                onChange={handleInputChange}
                style={{ width: "50px" }} // Adjust width here
              />
              <label htmlFor="paraBackColorInput" className="form-label">
                Section Background Color
              </label>
              <input
                type="color"
                className="form-control"
                id="paraBackColorInput"
                name="paraBackColor"
                value={formData.paraBackColor}
                onChange={handleInputChange}
                style={{ width: "50px" }} // Adjust width here
              />
            </Tab>
            <Tab eventKey="navbar" title="Navbar">
              <form>
                <div className="mb-3">
                  <label htmlFor="brandNameInput" className="form-label">
                    Brand Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="brandNameInput"
                    name="brandName"
                    value={formData.brandName}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="navbarBgColorInput" className="form-label">
                    Navbar Background Color
                  </label>
                  <input
                    type="color"
                    className="form-control"
                    id="navbarBgColorInput"
                    name="navbarBgColor"
                    value={formData.navbarBgColor}
                    onChange={handleInputChange}
                    style={{ width: "50px" }} // Adjust width here
                  />
                </div>
                <div className="form-check form-switch mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="useUploadedLogo"
                    checked={formData.useUploadedLogo}
                    onChange={handleToggleChange}
                  />
                  <label className="form-check-label" htmlFor="useUploadedLogo">
                    Use Uploaded Logo
                  </label>
                </div>
                {formData.useUploadedLogo ? (
                  <div className="mb-3">
                    <label htmlFor="logoUpload" className="form-label">
                      Upload Logo
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="logoUpload"
                      onChange={handleImageUpload}
                    />
                  </div>
                ) : (
                  <div className="mb-3">
                    <label htmlFor="logoUrlInput" className="form-label">
                      Logo URL
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="logoUrlInput"
                      name="logoUrl"
                      value={formData.logoUrl}
                      onChange={handleInputChange}
                    />
                  </div>
                )}
                <div className="mb-3">
                  <label className="form-label">Navbar Links</label>
                  {formData.navLinks.map((link, index) => (
                    <div key={index} className="mb-2">
                      <label className="form-label">Link Text</label>
                      <input
                        type="text"
                        className="form-control"
                        value={link.text}
                        onChange={(e) =>
                          handleNavLinkChange(index, "text", e.target.value)
                        }
                      />
                      <label className="form-label">Link URL</label>
                      <input
                        type="text"
                        className="form-control"
                        value={link.href}
                        onChange={(e) =>
                          handleNavLinkChange(index, "href", e.target.value)
                        }
                      />
                    </div>
                  ))}
                </div>
              </form>
            </Tab>
            <Tab eventKey="cards" title="Cards">
              <form>
                <div className="mb-3">
                  <label htmlFor="cardSectionTitleInput" className="form-label">
                    Section Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardSectionTitleInput"
                    name="cardSectionTitle"
                    value={formData.cardSectionTitle}
                    onChange={handleInputChange}
                  />
                </div>
                {formData.cards.map((card, index) => (
                  <div key={index} className="mb-3">
                    <label className="form-label">Card {index + 1}</label>
                    <input
                      type="file"
                      className="form-control mb-1"
                      accept="image/*"
                      onChange={(e) =>
                        handleCardImageUpload(index, e.target.files[0])
                      }
                    />
                    <input
                      type="text"
                      className="form-control mb-1"
                      placeholder="Image URL"
                      value={card.imageUrl}
                      onChange={(e) =>
                        handleCardInputChange(index, "imageUrl", e.target.value)
                      }
                    />
                    <input
                      type="text"
                      className="form-control mb-1"
                      placeholder="Title"
                      value={card.title}
                      onChange={(e) =>
                        handleCardInputChange(index, "title", e.target.value)
                      }
                    />
                    <textarea
                      className="form-control mb-1"
                      placeholder="Description"
                      value={card.description}
                      onChange={(e) =>
                        handleCardInputChange(
                          index,
                          "description",
                          e.target.value
                        )
                      }
                    />
                    <input
                      type="text"
                      className="form-control mb-1"
                      placeholder="Link"
                      value={card.link}
                      onChange={(e) =>
                        handleCardInputChange(index, "link", e.target.value)
                      }
                    />
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDeleteCard(index)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="btn btn-primary mt-3"
                  onClick={handleAddCard}
                >
                  Add New Card
                </button>
              </form>
            </Tab>
            <Tab eventKey="contact" title="Contact Us">
              <form>
                <div className="mb-3">
                  <label htmlFor="contactUsTitleInput" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contactUsTitleInput"
                    name="contactUsTitle"
                    value={formData.contactUsTitle}
                    onChange={handleContactUsInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="contactUsDescriptionInput"
                    className="form-label"
                  >
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="contactUsDescriptionInput"
                    rows="3"
                    name="contactUsDescription"
                    value={formData.contactUsDescription}
                    onChange={handleContactUsInputChange}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="contactUsWebsiteInput" className="form-label">
                    Website
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contactUsWebsiteInput"
                    name="contactUsWebsite"
                    value={formData.contactUsWebsite}
                    onChange={handleContactUsInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="contactUsWhatsAppInput"
                    className="form-label"
                  >
                    WhatsApp
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contactUsWhatsAppInput"
                    name="contactUsWhatsApp"
                    value={formData.contactUsWhatsApp}
                    onChange={handleContactUsInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="contactUsLinkedInInput"
                    className="form-label"
                  >
                    LinkedIn
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contactUsLinkedInInput"
                    name="contactUsLinkedIn"
                    value={formData.contactUsLinkedIn}
                    onChange={handleContactUsInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="contactUsFacebookInput"
                    className="form-label"
                  >
                    Facebook
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contactUsFacebookInput"
                    name="contactUsFacebook"
                    value={formData.contactUsFacebook}
                    onChange={handleContactUsInputChange}
                  />
                </div>
              </form>
            </Tab>
          </Tabs>
        </div>
        <div className="col-md-6">
          <Website1 formData={formData} featuresData={featuresData} />
        </div>
      </div>
      {/* <Preview formData={formData} featuresData={featuresData}/> */}
    </div>
  );
};

export default Design;
