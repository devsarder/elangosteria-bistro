import { useEffect, useRef, useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../../shared/SocialLogin/SocialLogin";

// import { FcGoogle } from "react-icons/fc";
// import { AiOutlineMail } from "react-icons/ai";
// import { useContext, useState } from "react";
// import { AuthContext } from "../../../provider/AuthProvider";

const Login = () => {
  //   const [error, setError] = useState("");
  const navigate = useNavigate();
  // const location = useLocation();
  const { signInUser } = useAuth();
  // todo: set disabled true when to deploy
  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef(null);

  //   const { signInUser, googleSignInUser, user } = useContext(AuthContext);
  //   const navigate = useNavigate();
  const handleSignIn = (e) => {
    // const from = location?.state?.from.pathname || "/";
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        const currentUser = result.user;
        console.log(currentUser);
        Swal.fire("You Are Successfully Logged In!");
        // navigate(from, { replace: true });
        navigate("/");
      })
      .then((err) => console.log(err));
  };

  //   const handleGoggleSignIn = () => {
  //     googleSignInUser()
  //       .then((res) => {
  //         const googleUser = res.user;
  //         console.log(googleUser);
  //         if (user) {
  //           navigate("/");
  //         }
  //         // if (user) {
  //         //   navigate("/");
  //         // }
  //       })
  //       .catch((err) => {
  //         setError(err);
  //         console.error(err);
  //       });
  //   };
  useEffect(() => {
    loadCaptchaEnginge(5);
  }, []);
  // TODO:BEFORE DEPLOYING NEED TO UNCOMMENT THIS
  const handleCaptchaValidation = (e) => {
    const captchaValue = e.target.value;
    // const captchaValue = captchaRef.current.value;
    console.log(captchaValue);
    if (validateCaptcha(captchaValue)) {
      setDisabled(false);
      alert("captcha matched");
      captchaRef.reset();
    } else {
      setDisabled(true);
    }
  };
  return (
    <div>
      <div className="hero min-h-screen bg-gradient-to-r from-[#318a35] to-[rgba(21, 21, 21, 0.00) 100%)]-full text-white">
        <div className="hero-content w-1/2 flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card w-3/4 flex-shrink-0 shadow-2xl  bg-base-100">
            <form onSubmit={handleSignIn} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input text-black input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input text-black input-bordered"
                  required
                />
                <div className="">
                  {/* TODO:ENABLE BEFORE DEPLOYMENT */}
                  <label className="">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    type="text"
                    // ref={captchaRef}
                    onBlur={handleCaptchaValidation}
                    placeholder="type the captcha above "
                    name="captcha"
                    className="input w-full text-black input-bordered"
                    required
                  />
                  {/* <button
                    onClick={handleCaptchaValidation}
                    className="btn btn-outline rounded-md my-2 w-1/2 mx-auto "
                  >
                    validate captcha
                  </button> */}
                </div>
              </div>
              <div className="form-control mt-6">
                <button
                  className={
                    disabled
                      ? "btn-ghost"
                      : "btn  bg-green-800 font-bold text-white hover:bg-green-500 delay-100 "
                  }
                >
                  {/* <AiOutlineMail className="text-4xl  mr-1"></AiOutlineMail>{" "} */}
                  Sign In With Email
                </button>
                <hr />
                {/* social login */}
                <div className="text-center">
                  <SocialLogin></SocialLogin>
                </div>

                <p className="text-black text-center capitalize ">
                  Do not have an account
                  <Link
                    to="/register"
                    className="underline font-bold text-green-800"
                  >
                    Please Register
                  </Link>
                </p>
                <div>
                  <p className="text-red-700 text-center font-semibold">
                    {/* {error} */}
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
