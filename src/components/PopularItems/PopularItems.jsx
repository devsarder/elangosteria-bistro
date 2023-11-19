import SectionTittle from "../shared/SectionTittle/SectionTittle";
import MenuItem from "../shared/MenuItem/MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularItems = () => {
  const [menu, loading] = useMenu();
  if (loading) {
    return (
      <p className="text-center text-purple-600 font-bold text-3xl">
        Data is Loading
      </p>
    );
  }
  const popularItems = menu.filter((item) => item.category === "popular");

  return (
    <section>
      <SectionTittle
        heading={"Popular Items"}
        subHeading={"FROM OUR MENU"}
      ></SectionTittle>

      <div className="grid md:grid-cols-2 gap-4  my-7">
        {popularItems.map((item) => (
          <MenuItem menuItem={item} key={item._id}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularItems;
