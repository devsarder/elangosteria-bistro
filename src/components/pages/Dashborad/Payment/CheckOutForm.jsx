import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useSecureAxios from "../../../../hooks/useSecureAxios";
import useCart from "../../../../hooks/useCart";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";

const CheckOutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const secureAxios = useSecureAxios();
  const { cart, refetch } = useCart();
  const { user } = useAuth();
  console.log(cart);
  const totalPrice = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);
  const totalPriceParseint = Math.floor(totalPrice);
  console.log(totalPriceParseint);
  // post to create payment intent
  useEffect(() => {
    if (totalPrice > 0) {
      secureAxios
        .post("/create-payment-intent", { price: totalPriceParseint })
        .then((res) => setClientSecret(res.data.clientSecret))
        .catch((err) => console.log(err));
    }
  }, [secureAxios, totalPrice, totalPriceParseint]);
  console.log(clientSecret);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: card,
    });
    if (error) {
      console.log(error);
      setError(error.message);
    } else {
      console.log(paymentMethod);
      setError("");
    }
    // confirm the payment method
    const { paymentIntent, err } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      }
    );

    if (err) {
      console.log("confirm card payment", err);
    } else {
      console.log(paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);
        const payment = {
          userEmail: user?.email || "anonymous",
          price: totalPrice,
          date: new Date(), // TODO convert date to utc now
          cartId: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.menuId),
          transactionIds: paymentIntent.id,
        };
        secureAxios.post("/payments", payment).then((res) => {
          if (res.data?.paymentResult?.insertedId) {
            Swal.fire({
              title: "Good job!",
              text: "Payment Successful! Thank you for your purchase!",
              icon: "success",
            });
          }
        });
        refetch();
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn-outline btn-primary rounded-md px-2 py-1 my-2"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
      {error && <p className="text-red-600 font-semibold">{error}</p>}
      {transactionId && (
        <p className="text-green-700 font-serif text-center">
          Your Transaction Id : {transactionId}
        </p>
      )}
    </div>
  );
};

export default CheckOutForm;
