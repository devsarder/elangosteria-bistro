import { Helmet } from "react-helmet-async";
import ParallaxCover from "../../shared/ParallaxCover/ParallaxCover";
import menuImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTittle from "../../shared/SectionTittle/SectionTittle";
import MenuItem from "../../shared/MenuItem/MenuItem";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menu, loading] = useMenu();
  if (loading) {
    return (
      <span className="loading loading-spinner text-center text-purple-700 loading-lg"></span>
    );
  }
  const menuOffer = menu.filter((item) => item.category === "offered");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");

  console.log(menu);
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <div>
        <ParallaxCover img={menuImg} title={"Our Menu"}></ParallaxCover>

        <div>
          <SectionTittle
            heading={"TODAY'S OFFER"}
            subHeading={"don't miss"}
          ></SectionTittle>
          <div className="grid md:grid-cols-2 gap-3 my-6">
            {menuOffer.map((item) => (
              <MenuItem menuItem={item} key={item._id}></MenuItem>
            ))}
          </div>
        </div>
      </div>
      {/* menu category salad */}
      <MenuCategory
        title={"salads"}
        img={saladImg}
        items={salad}
      ></MenuCategory>
      {/* menu category pizza */}
      <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
      {/* soups category */}
      <MenuCategory items={soup} title={"soups"} img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
