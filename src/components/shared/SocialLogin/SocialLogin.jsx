import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const axiosPublic = useAxiosPublic();
  const handleSignInWithGoogle = () => {
    signInWithGoogle().then((res) => {
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
      };
      axiosPublic
        .post("/users", userInfo)
        .then((response) => console.log(response.data));
    });
  };
  return (
    <div>
      <div className="divider"></div>
      <button
        onClick={handleSignInWithGoogle}
        className="btn my-4 bg-green-800 font-bold text-white hover:bg-green-500 delay-100 "
      >
        <FcGoogle className="text-4xl  mr-1"></FcGoogle>
        login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
