import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({ showModal, setShowModal, theme }) => {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_536o1vo",
        "template_yizv08u",
        form.current,
        "r_fDYFQtdYgX_4GyY"
      )
      .then(
        (result) => {
          // console.log(result.text);
          setShowModal(false);
          setIsEmailSent(true);
          resetForm();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const resetForm = () => {
    form.current.reset();
    setIsEmailSent(false);
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-full p-4 md:inset-0 h-modal md:h-full">
            <div className="relative w-full h-full max-w-md md:h-auto">
              {/* content */}
              <div
                className={`relative  rounded-2xl ${
                  theme === "dark" ? "bg-[#1A202C]" : "bg-white"
                }`}>
                {/* header */}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h4 className="text-xl font-semibold">Get in touch</h4>
                  <button
                    type="button"
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-red-500 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                    data-modal-toggle="authentication-modal"
                    onClick={() => setShowModal(false)}>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                {/* body */}
                <div className="px-6 py-6 lg:px-8">
                  <form className="space-y-6" ref={form} onSubmit={sendEmail}>
                    <div>
                      <label
                        htmlFor="use_name"
                        className="block mb-2 text-sm font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        name="user_name"
                        id="user_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="user_email"
                        className="block mb-2 text-sm font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        id="user_email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="example@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="user_message"
                        className="block mb-2 text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        type="text"
                        name="user_message"
                        id="user_message"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Your message"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full focus:ring-4 focus:outline-non font-medium rounded-lg text-sm px-5 py-2.5 text-center border-stone-200 bg-gray-200 text-black duration-700 hover:bg-black hover:text-white">
                      Send
                    </button>
                  </form>
                  <h5 className="flex justify-center pt-5 block mb-2 text-sm font-medium">
                    OR
                  </h5>
                  <a href="mailto:shaunniel02@gmail.com?subject=Feedback">
                    <h6 className="flex justify-center pt-3 block mb-2 text-sm font-medium hover:text-gray-500 duration-700">
                      shaunniel02@gmail.com
                    </h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Contact;
