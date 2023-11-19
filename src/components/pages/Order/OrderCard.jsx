import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useSecureAxios from "../../../hooks/useSecureAxios";
import useCart from "../../../hooks/useCart";

const OrderCard = ({ orderCart }) => {
  const { image, name, price, recipe, _id } = orderCart;
  const secureAxios = useSecureAxios();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { refetch } = useCart();
  // add user order to db
  const handleAddToCar = (food) => {
    if (user) {
      // todo:we send order to the database
      const cartItem = {
        menuId: _id,
        image,
        name,
        price,
        email: user.email,
      };
      secureAxios
        .post("/carts", cartItem)
        .then((res) => {
          console.log(res.data);
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${name} is added to cart`,
            showConfirmButton: false,
            timer: 2000,
          });
          // count the clients order in the cart button
          refetch();
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      Swal.fire({
        title: "You Are Not Logged In",
        text: "Please Login First!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }

    console.log(food, user.email);
  };

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <p className=" absolute right-4 px-1 rounded-md top-2 bg-yellow-400 text-purple-800 font-semibold text-lg">
        $ {price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}!</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCar({ orderCart })}
            className="btn  bg-yellow-400 text-[#800080] normal-case text-lg hover:bg-yellow-300"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
