import React from "react";

const AboutUs = () => {
  return (
    <div>
      <h2 className="text-4xl text-center mb-8">Our Team Members</h2>
      <div className=" container mx-auto justify-center items-center grid grid-cols-2 gap-8 mb-8">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/gFnLM9X/Team-member-1.png"
              alt="Movie"
            />
          </figure>
          <div className="card-body mt-24">
            <h2 className="card-title">Devid Backhum</h2>
            <p>Founder & CEO</p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/g6Q4NKt/Team-member-2.png"
              alt="Movie"
            />
          </figure>
          <div className="card-body mt-24">
            <h2 className="card-title">Thomas Johnson</h2>
            <p>Product Manager</p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/nRSFn0V/Team-member-3.png"
              alt="Movie"
            />
          </figure>
          <div className="card-body mt-24">
            <h2 className="card-title">Adam Peterson</h2>
            <p>Co-Founder</p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/PzCKfQ7/Team-member-4.png
              "
              alt="Movie"
            />
          </figure>
          <div className="card-body mt-24">
            <h2 className="card-title">Victoria Clark</h2>
            <p>Marketing Manager</p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
