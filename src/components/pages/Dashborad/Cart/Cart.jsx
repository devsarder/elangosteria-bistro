import { FaUpload } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useCart from "../../../../hooks/useCart";
import SectionTittle from "../../../shared/SectionTittle/SectionTittle";
import useSecureAxios from "../../../../hooks/useSecureAxios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Cart = () => {
  const { refetch, cart } = useCart();
  const totalToPay = cart.reduce((sum, item) => sum + item.price, 0);
  const secureAxios = useSecureAxios();
  //   delete cart items from the cart
  const handleDelete = (id) => {
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
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
        secureAxios.delete(`/carts/${id}`).then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            refetch();
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
    <>
      <SectionTittle
        subHeading={"Hurry Up"}
        heading={"Manage All Item"}
      ></SectionTittle>
      <div className="bg-gray-200 p-1 my-2 rounded-md">
        {/* table header */}
        <div className="flex justify-evenly my-4">
          <h3 className="font-semibold text-3xl">Total Order:{cart.length}</h3>
          <p className="font-semibold text-3xl">Total Price: ${totalToPay}</p>
          <Link to='/dashboard/payment'><button className="btn btn-primary">Pay</button></Link>
        </div>

        {/* table */}
        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Item Image</th>
                  <th>Price</th>
                  <th>update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {cart.map((item, index) => (
                  <tr className="text-lg" key={item._id}>
                    <th>{index + 1}</th>
                    <th>{item.name}</th>
                    <th>
                      <img
                        style={{ borderRadius: "0px 200px 200px 200px" }}
                        className="object-cover w-[100px] "
                        src={item.image}
                        alt=""
                      />
                    </th>
                    <td>{item.price}</td>
                    <td>
                      <button className="btn btn-lg btn-accent">
                        <FaUpload></FaUpload>
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-lg btn-ghost"
                      >
                        <MdDelete className="text-red-600"></MdDelete>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
