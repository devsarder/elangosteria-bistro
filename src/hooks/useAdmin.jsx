import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useSecureAxios from "./useSecureAxios";

const useAdmin = () => {
  const { user, isLoading } = useAuth();
  const axiosSecure = useSecureAxios();
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user.email, "isAdmin"],
    // enabled: !isLoading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      console.log(res.data);
      return res.data.admin;
    },
  });
  return { isAdmin: isAdmin, isAdminLoading: isAdminLoading };
};

export default useAdmin;
