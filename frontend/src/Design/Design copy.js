import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";

const Design = () => {
  const [formData, setFormData] = useState({
    title: "",
    paratitle: "About Us",
    description: "",
    paradescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "",
    buttonLink: "", // New field for button link
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((prevData) => ({
        ...prevData,
        imageUrl: reader.result,
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

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {/* Content for the first column */}
          <h2>Customize Website</h2>
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
                    rows="3"
                    name="description"
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
                  <div className="row">
                    <div className="col">
                      <label
                        htmlFor="buttonTextColorInput"
                        className="form-label"
                      >
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
                    </div>
                    <div className="col">
                      <label
                        htmlFor="buttonBgColorInput"
                        className="form-label"
                      >
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
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="imageInput" className="form-label">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="imageInput"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </div>
              </form>
            </Tab>
            <Tab eventKey="customize2" title="Customize">
              <form>
                <label htmlFor="titleInput" className="form-label">
                  Section Title
                </label>
                <input
                  type="text"
                  className="form-control mb-1"
                  id="titleInput"
                  name="customTitle"
                  value={formData.customTitle}
                  onChange={handleInputChange}
                />
                <label htmlFor="titleColorInput" className="form-label">
                  Title Color
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
                <label htmlFor="titleColorInput" className="form-label">
                  Point heading Color
                </label>
                <input
                  type="color"
                  className="form-control"
                  id="titleColorInput"
                  name="pointHeadingColor"
                  value={formData.pointHeadingColor}
                  onChange={handleInputChange}
                  style={{ width: "50px" }} // Adjust width here
                />
                <label htmlFor="titleColorInput" className="form-label">
                  Point Description Color
                </label>
                <input
                  type="color"
                  className="form-control"
                  id="titleColorInput"
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
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </Tab>
          </Tabs>
        </div>
        <div className="col-md-6">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 style={{ color: formData.titleColor }}>
                  {formData.title || "Superior SAAS Platform"}
                </h1>
                <p style={{ color: formData.descriptionColor }}>
                  {formData.description ||
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                </p>
                <a
                  href={formData.buttonLink} // Using button link from state
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
                <img
                  src={formData.imageUrl}
                  alt="Mockup"
                  className="img-fluid"
                />
              </div>
            </div>
            <hr />
            <h2
              className="text-center"
              style={{ color: formData.customTitleColor }}
            >
              {formData.customTitle}
            </h2>
            <div className="row">
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
            <div className="row">
              <h2 style={{ color: formData.titleColor, textAlign: "center" }}>
                {formData.title || "About Us"}
              </h2>
              <p style={{ color: formData.descriptionColor, textAlign: "center" }}>
                {formData.description ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
