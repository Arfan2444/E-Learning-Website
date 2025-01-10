"use client";
import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple email validation (you can use a more robust solution)
    if (email && email.includes("@")) {
      setIsSubscribed(true);
    }
  };

  return (
    <div className="bg-white py-12 px-6 lg:px-8">
      <div className=" max-w-3xl mx-auto text-center ">
        <h2 className="mx-0 mb-5 text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
          Newsletter✉️
        </h2>
        <div className="border rounded-xl border-primary">
        <img src="./newsletter.jpg" alt="Newsletter" className=" mt-4 mx-auto" />
        </div>
        <p className="mt-4 text-gray-600">
          Subscribe to our newsletter to get the latest updates, news, and
          special offers directly in your inbox.
        </p>

        {/* Show success message if subscribed */}
        {isSubscribed ? (
          <div className="mt-8 bg-green-100 text-green-700 py-3 px-6 rounded-md">
            Subscription successful! Thank you for subscribing to our
            newsletter.
          </div>
        ) : (
          // Subscription Form
          <form className="mt-8 sm:flex justify-center" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-auto px-5 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button
              type="submit"
              className="mt-4 sm:mt-0 sm:ml-3 w-full sm:w-auto px-5 py-3 bg-primary text-white font-medium rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
