import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "../../../../hooks/useSecureAxios";
import SectionTittle from "../../../shared/SectionTittle/SectionTittle";
import { FaTrash, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import useCart from "../../../../hooks/useCart";

const AllUsers = () => {
  const axiosSecure = useSecureAxios();
  const { refetch } = useCart();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  console.log(users);
  // manage admin
  const handleMakeAdmin = (userId) => {
    axiosSecure.patch(`/users/admin/${userId}`).then((response) => {
      console.log(response);
      refetch();
      if (response.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your became admin successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDeleteUser = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((response) => {
          if (response.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionTittle
        subHeading={"How Many"}
        heading={"Manage users"}
      ></SectionTittle>
      {/* users table */}
      <div className="bg-base-200 rounded-md my-4">
        <h2 className="text-3xl text-center">Total Users: {users.length}</h2>

        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, idx) => (
                  <tr key={user._id}>
                    <th>{idx + 1}</th>
                    <td>{user.email}</td>
                    <td>
                      {user.role === "admin" ? (
                        "Admin"
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(user._id)}
                          className="btn-sm rounded-lg bg-yellow-500 text-white text-xl"
                        >
                          <FaUser></FaUser>
                        </button>
                      )}
                    </td>

                    <td>
                      <button
                        onClick={() => handleDeleteUser(user._id)}
                        className="btn-sm rounded-lg bg-red-500 text-white font-semibold"
                      >
                        <FaTrash></FaTrash>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
