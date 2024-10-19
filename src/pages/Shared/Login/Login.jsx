import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import googleImg from "../../../../public/Images/google.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { signInWithPopup } from "firebase/auth";
import { provider } from "../../../Firebase/firebase.config";

const Login = () => {
  const { signIn, auth } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    // form.reset();
    signIn(email, password)
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User Login Successfully",
        });
        console.log(result);

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please check your email and password",
        });
      });
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // The signed-in user info
      const user = result.user;
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User Login Successfully",
      });
      console.log("Logged in User: ", user);
      // Navigate to home or dashboard after successful login
      navigate("/");
    } catch (error) {
      console.log("Error during Google Login: ", error.message);
    }
  };

  return (
    <div className="px-4 mx-auto my-8 max-w-7xl">
      <Helmet>
        <title>Sit Well | LogIn</title>
      </Helmet>
      <div>
        <div className="justify-center px-4 py-8 mx-auto bg-white rounded-sm shadow-md md:px-6 shadow-black md:w-96">
          <h1 className="mb-6 text-2xl font-bold text-black md:text-4xl">
            LogIn
          </h1>
          <form onSubmit={handleLogin} className="flex flex-col gap-6">
            <input
              className="px-3 py-3 text-black border border-blue-500 rounded-sm"
              type="email"
              name="email"
              required
              placeholder="Email"
              id="1"
            />
            <input
              className="px-3 py-3 text-black border border-blue-500 rounded-sm"
              type="password"
              name="password"
              required
              placeholder="Password"
              id="2"
            />
            <div className="flex flex-col w-full border-opacity-50">
              <button className="py-3 mt-4 font-bold text-white bg-blue-500 rounded-sm md:text-xl hover:bg-orange-500">
                LogIn
              </button>
              <div className="text-black divider">or</div>
              <button
                onClick={handleGoogleLogin}
                className="flex items-center justify-center gap-3 py-3 mt-2 font-bold text-center text-black border border-blue-500 rounded-sm md:text-xl"
              >
                <img className="h-6" src={googleImg} alt="" />
                Login with Google
              </button>
              <div className="mt-4 text-black">
                <h4>
                  New to Sit Well?{" "}
                  <Link to="/signUp" className="font-bold underline">
                    Sign Up
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

export default Login;
