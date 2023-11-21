import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
});

const useSecureAxios = () => {
  const { signOutUser } = useAuth();
  const navigate = useNavigate();
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access_token");
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );
  // intercepts the request with status code 401 and returns
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    // for 401 or 403 logout the user in the browser
    async (err) => {
      // console.error(err);

      const status = err.response.status;
      console.log(status);
      if (status === 401 || status === 403) {
        await signOutUser();
        navigate("/login");
      }

      return Promise.reject(err);
    }
  );
  return axiosSecure;
};

export default useSecureAxios;
