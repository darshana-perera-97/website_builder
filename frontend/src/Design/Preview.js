import React from "react";
import Website1 from "./Website1"; // Assuming Website1 component is in the same directory

const Preview = ({ formData, featuresData }) => {
  return (
    <div className="laptop-frame">
      <div className="laptop-screen">
        <Website1 formData={formData} featuresData={featuresData} />
      </div>
    </div>
  );
};

export default Preview;
