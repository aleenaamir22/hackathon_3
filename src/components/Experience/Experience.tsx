import React from "react";
import Image from "next/image";
import { experienceItems } from "../../constants/Experience";

const ExperienceSection = () => {
  return (
    <div className="experience-container">
      {experienceItems.map((item, index) => (
        <div key={index} className="experience-item">
          <Image
            src={item.src} // item.src is a string (path to image)
            alt={item.label}
            className="experience-image"
            width={200}
            height={200}
          />
          <div className="experience-info">
            <p className="value">{item.value}</p>
            <p className="label">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
