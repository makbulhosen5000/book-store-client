import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import {toast} from 'react-hot-toast';

const Contact = () => {

    const form = useRef();
     const sendEmail = (e) => {
       e.preventDefault();

       emailjs
         .sendForm(
           "service_nwxhzho",
           "template_y5hixrr",
           form.current,
           "eBs4o8v6cmheTDyjc"
         )
         .then(
           (result) => {
             toast.success(result.text?"Mail Send Successfully":'');
           },
           (error) => {
             console.log(error.text);
           }
         );
     };
    return (
      <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <label
              htmlFor="user_name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Send
          </button>
        </form>
      </div>
    );
};

export default Contact;