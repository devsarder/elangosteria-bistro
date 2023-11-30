import { Elements } from "@stripe/react-stripe-js";
import SectionTittle from "../../../shared/SectionTittle/SectionTittle";

import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_API_KEY);

const Payment = () => {
  return (
    <div>
      <SectionTittle
        heading={"Payment"}
        subHeading={"Please Make Purchase"}
      ></SectionTittle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
