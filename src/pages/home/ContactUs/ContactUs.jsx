import React, { useState } from "react";
import emailjs from "emailjs-com";
import { BsFillPinAngleFill } from "react-icons/bs";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_b2bbr3e",
        "template_zs72pqg",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "9a6BijpLcY-TirglN"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsFormSubmitted(true);
          setIsModalVisible(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex items-center justify-center py-4">
      <div className="w-full max-w-lg px-4 py-8">
        <div>
          <h1 className="justify-center pb-1 mx-auto mb-6 text-3xl font-bold text-center text-blue-500 md:text-4xl">
            Contact Us
          </h1>
          <p className="relative px-6 pb-8 text-justify md:px-0">
            At Sit Well, your comfort and satisfaction are our top priorities.
            Whether you have a question, need assistance, or just want to share
            feedback, we’re here to help. Reach out to us and let’s make your
            seating experience even better!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="px-3 py-10 transition-all duration-300 border border-blue-500 rounded-lg shadow-lg md:px-6"
        >
          {/* Name Field */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-black bg-gray-300 border border-blue-500 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-black bg-gray-300 border border-blue-500 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Your Email"
            />
          </div>

          {/* Phone Field */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold">Phone</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black bg-gray-300 border border-blue-500 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Your Phone Number"
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-black bg-gray-300 border border-blue-500 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Your Message"
              rows="5"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 mt-2 font-semibold text-white bg-blue-500 rounded-sm hover:bg-orange-500"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Success Modal */}
        {isModalVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="p-6 text-center bg-white rounded-lg shadow-lg">
              <h2 className="mb-4 text-2xl font-bold">Message Sent!</h2>
              <p className="mb-4">Your message sent successfully.</p>
              <button
                className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-sm hover:bg-orange-500"
                onClick={() => setIsModalVisible(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
