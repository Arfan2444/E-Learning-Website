"use client";
import React, { useState } from "react";

const PaymentComponent = () => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [subscriptionType, setSubscriptionType] = useState("monthly");
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubscriptionChange = (e) => {
    setSubscriptionType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful payment processing
    setSubscriptionSuccess(true);
    setTimeout(() => setSubscriptionSuccess(false), 3000); // Hide message after 3 seconds
  };

  return (
    <div className="flex justify-center items-center mt-10 bg-gray-100 ">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center text-purple-400">
          Subscribe
        </h2>

        {subscriptionSuccess && (
          <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6 text-center">
            Subscription successful! 🎉
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Choose a Plan:
          </label>
          <div className="flex space-x-4">
            <button
              className={`py-2 px-4 rounded-lg focus:outline-none ${
                subscriptionType === "monthly"
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              value="monthly"
              onClick={handleSubscriptionChange}
            >
              Monthly ₹499
            </button>
            <button
              className={`py-2 px-4 rounded-lg focus:outline-none ${
                subscriptionType === "yearly"
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              value="yearly"
              onClick={handleSubscriptionChange}
            >
              Yearly ₹3500
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Payment Method:
          </label>
          <select
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:bg-primary-50"
            value={paymentMethod}
            onChange={handlePaymentChange}
          >
            <option value="creditCard">Credit Card</option>
            <option value="upi">UPI</option>
          </select>
        </div>

        {paymentMethod === "creditCard" && (
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Credit Card Details:
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:bg-purple-50 mb-2"
              placeholder="Card Number"
            />
            <div className="flex space-x-2">
              <input
                type="text"
                className="w-1/2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:bg-purple-50"
                placeholder="MM/YY"
              />
              <input
                type="text"
                className="w-1/2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:bg-purple-50"
                placeholder="CVV"
              />
            </div>
          </div>
        )}

        {paymentMethod === "upi" && (
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              UPI ID:
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:bg-purple-50"
              placeholder="your-upi-id@bank"
            />
          </div>
        )}

        <button
          className="w-full bg-primary text-white py-2 rounded-lg mt-4 hover:bg-purple-400 transition-colors"
          onClick={handleSubmit}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentComponent;
