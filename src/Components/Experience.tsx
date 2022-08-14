import React from "react";
import Img1 from "../assets/img/exp-img1.png";
import Img2 from "../assets/img/exp-img2.png";

const Experience = () => {
  return (
    <section className="mb-12 lg:mb-24">
      <div className="container mx-auto">
        <div className="flex flex-col min-h-[480px] lg:flex-row lg:space-x-20">
          {/* Image */}
          <div className="flex-1 flex space-x-6 items-center lg:space-x-12">
            <div className="self-start">
              <img src={Img1} alt="" />
            </div>
            <div className="self-end">
              <img src={Img2} alt="" />
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center mt-6 lg:mt-0">
            <h2 className="text-3xl font-bold mb-6 ">New Experience In Playing Games</h2>
            <p className="font-secondary mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              voluptatum possimus excepturi fuga vitae corporis laudantium
              quibusdam beatae unde ea?
            </p>
            <button className="btn">Get it now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
