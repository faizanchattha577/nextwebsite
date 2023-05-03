"use client";
import React,{useState} from "react";

import Head from "next/head";

const Contact = () => {
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  
    function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });

  
    }

  function handleSubmission() {
  
  }
  return (
    <div>
      <Head>
        <title>Contact Us - My Website</title>
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100">
        <div className="w-full max-w-md px-4 py-8 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-center text-gray-800">
              Contact Us
            </h1>
            <p className="mt-2 text-sm text-center text-gray-600">
              We'd love to hear from you!
            </p>
          </div>

          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                  value={user.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Message"
                required
                value={user.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v1.586l2.707-2.707a1 1 0 111.414 1.414L11.414 8H13a1 1 0 110 2H7a1 1 0 110-2h1.586l-2.293-2.293A1 1 0 016.293.293L9 3.586V2a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"  
                      d="M4 13a1 1 0 011-1h1.586l-2.293-2.293a1 1 0 111.414-1.414L8 11.586V10a1 1 0 112 0v6a2 2 0 01-2 2H4a1 1 0 01-1-1v-6z"
                      clipRule="evenodd"  
                    />
                  </svg>
                </span>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;

                     
