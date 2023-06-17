import { useLocation } from "react-router-dom";

// stripe import
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK); //published key (pk)

const Payment = () => {
    const location = useLocation();

    const options = {
        mode: "payment",
        amount: Math.floor((location.state?.price || 0) * 100),
        currency: "usd",
        // Fully customizable with appearance API.
        appearance: {
            /*...*/
        },
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 pt-5 mb-5">
  <div className="max-w-md w-100 mx-auto p-4" style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", borderRadius: "10px" }}>
    <h1 className="text-center font-weight-bold mb-4" style={{ fontSize: "2rem", color: "#FDA7DF" }}>
      Payment Page
    </h1>
    <div>
      <Elements stripe={stripePromise} options={options}>
        <CheckOutForm price={location.state?.price} />
      </Elements>
    </div>
  </div>
</div>
    )
};

export default Payment;
