module.exports = {
  // other config...
  modules: {
    payment: {
      providers: [
        require("medusa-plugin-razorpay-v2")({
          key_id: process.env.RAZORPAY_KEY_ID,
          key_secret: process.env.RAZORPAY_KEY_SECRET,
          capture: true, // auto-capture after payment
        }),
      ],
    },
  },
}
