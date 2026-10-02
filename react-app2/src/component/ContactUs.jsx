import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className=" flex items-start justify-between gap-20">

        <div className="w-[300px] self-start text-left pt-20">
          <h1 className="text-2xl font-bold text-black mb-7">
            Get In Touch
          </h1>

          <div className="space-y-5 text-sm text-black">
            <p>123 Baker Street, London</p>
            <p> hello@company.io</p>
            <p> +44 20 7946 0958</p>
          </div>
        </div>
        <div className="w-[400px] border border-gray-300 rounded-2xl p-7 bg-red-950">
          <form className="space-y-5 text-left">

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Name
              </label>

              <input
                type="text"
                className="w-full h-9 border border-gray-300 rounded-lg px-3 text-black outline-none bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Email
              </label>

              <input
                type="email"
                className="w-full h-9 border border-gray-300 rounded-lg px-3 text-black outline-none bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Message
              </label>

              <textarea
                rows="3"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-black outline-none bg-white resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full h-10 bg-white text-black text-sm rounded-lg"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;