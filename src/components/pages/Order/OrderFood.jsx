import ParallaxCover from "../../shared/ParallaxCover/ParallaxCover";
import orderPage from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";

const OrderFood = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const { category } = useParams();
  console.log(category);
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const deserts = menu.filter((item) => item.category === "desert");

  return (
    <div>
      <ParallaxCover title={"Order You Food"} img={orderPage}></ParallaxCover>
      <div className="text-center my-6">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList
            style={{
              display: "flex",
              justifyContent: "space-around",
              color: "purple",
            }}
          >
            <Tab
              style={{
                fontSize: "20px",
                fontWeight: "600",
                textTransform: "uppercase",
              }}
            >
              Pizza
            </Tab>
            <Tab
              style={{
                fontSize: "20px",
                fontWeight: "600",
                textTransform: "uppercase",
              }}
            >
              salads
            </Tab>
            <Tab
              style={{
                fontSize: "20px",
                fontWeight: "600",
                textTransform: "uppercase",
              }}
            >
              soups
            </Tab>
            <Tab
              style={{
                fontSize: "20px",
                fontWeight: "600",
                textTransform: "uppercase",
              }}
            >
              deserts
            </Tab>
            <Tab
              style={{
                fontSize: "20px",
                fontWeight: "600",
                textTransform: "uppercase",
              }}
            >
              Drinks
            </Tab>
          </TabList>
          <TabPanel>
            <div className="">
              <OrderTab orderItems={salad}></OrderTab>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <OrderTab orderItems={soup}></OrderTab>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <OrderTab orderItems={pizza}></OrderTab>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <OrderTab orderItems={deserts}></OrderTab>
            </div>
          </TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OrderFood;
