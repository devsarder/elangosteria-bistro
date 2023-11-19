import { Link } from "react-router-dom";

const MenuItem = ({ menuItem }) => {
  console.log(menuItem);
  const { image, name, price, recipe } = menuItem;
  return (
    <div className="flex space-x-3 my-1 shadow p-2 rounded-sm shadow-[#800080]">
      <div className="flex items-center">
        <img
          style={{ borderRadius: "0px 200px 200px 200px" }}
          className="object-cover w-[100px] "
          src={image}
          alt=""
        />
      </div>
      <div>
        <h3 className=" font-semibold text-xl">{name}</h3>
        <p className="text-gray-500">{recipe}</p>
      </div>
      <h4 className=" text-[#800080] font-semibold">${price}</h4>

      <div className="text-center my-4">
        <Link to="/order-food">
          <button className=" font-semibold rounded-md border-b-4 p-2 border-[#800080]">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuItem;
