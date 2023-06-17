/* eslint-disable react/prop-types */
import {
    PaymentElement,
    useElements,
    useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const CheckOutForm = ({ price }) => {
    const { user } = useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        if (elements == null) {
            setLoading(false);
            return;
        }
        // console.log(elements);

        // Trigger form validation and wallet collection
        const { error: submitError } = await elements.submit();
        if (submitError) {
            // Show error to your customer
            setErrorMessage(submitError.message);
            setLoading(false);
            return;
        }

        // Create the PaymentIntent and obtain clientSecret from your server endpoint
        const res = await axios.post(
            `${
                import.meta.env.VITE_MELODIC_MASTERY_SERVER
            }/create-payment-intent?price=${price}`
        );
        console.log(res);
        const { clientSecret } = res.data;
        const { error } = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            elements,
            clientSecret,
            confirmParams: {
                return_url: `https://melodic-mastery-6b24a.web.app/dashboard`,
            },
        });

        if (error) {
            // This point will only be reached if there is an immediate error when
            // confirming the payment. Show error to your customer (for example, payment
            // details incomplete)
            setLoading(false);
            setErrorMessage(error.message);
        } else {
            const res = await axios.put(
                `${
                    import.meta.env.VITE_MELODIC_MASTERY_SERVER
                }/enrolled-class?email=${user.email}`
            );

            res.data.message && console.log(res.data.message);
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement />

            <button
                type="submit"
                disabled={!stripe || !elements || loading}
                className="bg-success text-white py-2 px-4 my-5 rounded"
            >
                Pay
            </button>
            {errorMessage && <div>{errorMessage}</div>}
        </form>
    );
};

export default CheckOutForm;
