import { Link } from "react-router-dom";
import MenuItem from "../../shared/MenuItem/MenuItem";
import ParallaxCover from "../../shared/ParallaxCover/ParallaxCover";

const MenuCategory = ({ items, img, title }) => {
  return (
    <div className="my-10">
      <ParallaxCover title={title} img={img}></ParallaxCover>
      <div className="grid  md:grid-cols-2 my-6">
        {items.map((item) => (
          <MenuItem menuItem={item} key={item._id}></MenuItem>
        ))}
      </div>
      <div className="text-center my-4">
        <Link to={`/order-food/${title}`}>
          <button className=" font-semibold rounded-md border-b-4 p-2 border-[#800080]">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
