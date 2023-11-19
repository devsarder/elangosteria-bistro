import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "./useSecureAxios";
import useAuth from "./useAuth";

const useCart = () => {
  const axiosSecure = useSecureAxios();
  const { user } = useAuth();
  const {
    isPending,
    refetch,
    error,
    data: cart = [],
  } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user?.email}`);
      return res.data;
    },
  });
  return { refetch, cart, isPending, error };
};

export default useCart;
