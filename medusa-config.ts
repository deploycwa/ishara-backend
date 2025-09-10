import razorpay from "medusa-plugin-razorpay-v2"

export default {
  // other config...
  modules: {
    payment: {
      providers: [
        razorpay({
          key_id: "rzp_test_RFwrxX4zvqh8eF",
          key_secret: "c1IreU3JGgHr62XwqS63WlPw",
          capture: true, // auto-capture after payment
        }),
      ],
    },
  },
}
