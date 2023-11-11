import { useEffect, useState } from "react";
import SectionTittle from "../shared/SectionTittle/SectionTittle";
import MenuItem from "../shared/MenuItem/MenuItem";

const PopularItems = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
//   console.log(menu);
  return (
    <section>
      <SectionTittle
        heading={"Popular Items"} 
        subHeading={"FROM OUR MENU"}
      ></SectionTittle>

      <div className="grid md:grid-cols-2 gap-4  my-7">
        {menu.map((item) => (
          <MenuItem menuItem={item} key={item._id}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularItems;
