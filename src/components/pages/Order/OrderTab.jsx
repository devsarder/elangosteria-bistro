// import OrderCard from "./OrderCard";

import OrderCard from "./OrderCard";

const OrderTab = ({ orderItems }) => {
  console.log(orderItems);
  return (
    <div className="grid grid-cols-3 gap-4 my-10">
      {orderItems.map((order) => (
        <OrderCard orderCart={order} key={order._id}></OrderCard>
      ))}
    </div>
  );
};

export default OrderTab;
