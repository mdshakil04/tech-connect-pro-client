/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
// import signup from '../../assets/images/4957136.jpg'
import { Link } from "react-router-dom";
// import { AuthContext } from "../../Firebase/AuthProvider";
const Registration = () => {



  return (
    <div className=" container mx-auto grid md:grid-cols-2">
      <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
      {/* onClick={handleRegistration} */}
        <form  className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
          <p>Already Register? Please Login <Link className=" text-red-600 font-bold" to='/login'>Login</Link></p>
            <button className="btn btn-outline btn-secondary font-bold lg:text-xl px-8 mt-4 mb-4">
             Register
            </button>
          </div>
        </form>
        {/* {
          registerError && <div className="toast toast-top toast-center">
          <div className="alert alert-error">
            <span>{registerError}</span>
          </div>
        </div>
        }
        {
          success && <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>{success}</span>
          </div>
        </div>
        } */}
      </div>
      <div>
            {/* <img className=" h-[500px]" src={signup} alt="" /> */}
      </div>
    </div>
  );
};

export default Registration;
