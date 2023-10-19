// import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../../Firebase/AuthProvider";

const Login = () => {

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Please! Login</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
        {/* onSubmit={handleLogin} */}
          <form  className="card-body">
            <div className="form-control">
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
            <div className="form-control mt-2">
               
            <button  className="btn btn-outline btn-secondary font-bold lg:text-xl px-8 mt-4 mb-4">Login</button>
            {/* <button onClick={handleGoogleSignIn}  className="btn btn-outline btn-secondary font-bold lg:text-xl px-8 mt-4 mb-4">Login With Google</button> */}
            <p>New User? Please <Link className=" text-red-600 font-bold" to='/register'>Register</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
