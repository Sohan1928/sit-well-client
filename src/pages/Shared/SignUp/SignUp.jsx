import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import googleImg from "../../../../public/Images/google.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { signInWithPopup } from "firebase/auth";
import { provider } from "../../../Firebase/firebase.config";

const SignUp = () => {
  const { createUser, auth } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    // form.reset();

    // create user
    createUser(email, password)
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User Created Successfully",
        });
        console.log(result);

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User Created Successfully",
      });
      console.log("User Info: ", user);
      navigate("/");
    } catch (error) {
      console.log("Error during Google Sign In: ", error.message);
    }
  };

  return (
    <div className="px-4 mx-auto my-8 max-w-7xl">
      <Helmet>
        <title>Sit Well | SignUp</title>
      </Helmet>
      <div>
        <div className="justify-center px-4 py-8 mx-auto bg-white rounded-sm shadow-md md:px-6 shadow-black md:w-96">
          <h1 className="mb-6 text-2xl font-bold text-black md:text-4xl">
            Please Sign Up
          </h1>
          <form onSubmit={handleSignUp} className="flex flex-col gap-6">
            <input
              className="px-3 py-3 text-black border border-blue-500 rounded-sm"
              type="text"
              name="name"
              required
              placeholder="Your Name"
              id="1"
            />
            <input
              className="px-3 py-3 text-black border border-blue-500 rounded-sm"
              type="email"
              name="email"
              required
              placeholder="Email"
              id="2"
            />
            <input
              className="px-3 py-3 text-black border border-blue-500 rounded-sm"
              type="password"
              name="password"
              required
              placeholder="Password"
              id="3"
            />
            <div className="flex flex-col w-full border-opacity-50">
              <button className="py-3 mt-4 font-bold text-white bg-blue-500 rounded-sm md:text-xl hover:bg-orange-500">
                Sign Up
              </button>
              <div className="text-black divider">or</div>
              <button
                onClick={handleGoogleSignUp}
                className="flex items-center justify-center gap-3 py-3 mt-2 font-bold text-center text-black border border-blue-500 rounded-sm md:text-xl"
              >
                <img className="h-6" src={googleImg} alt="" />
                Login with Google
              </button>
              <div className="mt-4 text-black">
                <h4>
                  Already have an account?{" "}
                  <Link to="/login" className="font-bold underline">
                    Please Login
                  </Link>
                </h4>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
