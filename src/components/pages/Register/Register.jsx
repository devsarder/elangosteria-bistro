import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SocialLogin from "../../shared/SocialLogin/SocialLogin";

const Register = () => {
  const { createUser } = useAuth();
  const axiosPublic = useAxiosPublic();
  // console.log(createUser);
  // const handleRegister = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   console.log(email, password);
  //   createUser(email, password)
  //     .then((res) => {
  //       console.log(res);
  //       const currentUser = res.user;
  //       if (currentUser.email) {
  //         navigate("/login");
  //       }
  //     })
  //     .catch((err) => {
  //       const errorMessage = err.message;
  //       console.log(errorMessage);
  //     });
  // };

  // applied react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // console.log(watch);
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((res) => {
        const email = res.user.email;
        console.log(email);
        axiosPublic
          .post("/users", { email })
          .then((response) => console.log(response));
        // console.log(res);
        const currentUser = res.user;
        if (currentUser.email) {
          // navigate("/login");
        }
        reset();
      })
      .catch((err) => {
        const errorMessage = err.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-gradient-to-r from-[#318a35] to-[rgba(21, 21, 21, 0.00) 100%)]-full text-white">
        <div className="hero-content w-1/2 flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Registration!</h1>
          </div>
          <div className="card w-3/4 flex-shrink-0 shadow-2xl  bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered text-black"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-800 capitalize  my-1 font-semibold">
                    this field is required
                  </span>
                )}
              </div>
              <div className="form-control"></div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input text-black input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-800 capitalize  my-1 font-semibold">
                    this field is required
                  </span>
                )}
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
                  {...register("password", {
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                />
                {errors.password?.type === "pattern" && (
                  <span className="text-red-800 capitalize  my-1 font-semibold">
                    <p className="text-red-800 capitalize  my-1 font-semibold">
                      Password must contain at least one lowercase, one digit,
                      and one uppercase
                    </p>
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-800 font-bold text-white hover:bg-green-500 delay-100 ">
                  Register Now
                </button>
                <hr />
                {/* social sign with email  */}
                <div className="w-full text-center">
                  <SocialLogin></SocialLogin>
                </div>
                <p className="text-black text-center capitalize ">
                  Already have an
                  <Link
                    to="/login"
                    className="underline font-semibold text-green-800"
                  >
                    Please sign in
                  </Link>
                </p>
                <div>
                  <p className="text-red-700 text-center font-semibold"></p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
