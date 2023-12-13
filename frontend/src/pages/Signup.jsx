import React from "react";

const Signup = () => {
  return (
    <div className="mt-4 mb-4 ml-2 mr-2">
      <div className="w-full">
        <div className="flex flex-row">
          <div className="sm:w-1/2 text-black">
            <div className="px-5 ms-xl-4 text-center">
              <span className="text-3xl mb-0">Wellcome</span>
            </div>

            <div className="flex items-center h-custom-2 px-5 ms-xl-4 mt-2 pt-5 pt-xl-0 mt-xl-n5">
              <form className="w-full max-w-md mx-auto px-20 pb-40 pt-20">
                <p className="text-sm">Welcome! Please enter your details.</p>

                <div className="mb-4 pt-3">
                  <label
                    htmlFor="form2Example18"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Fullname
                  </label>
                  <input
                    type="text"
                    id="form2Example18"
                    className="w-full px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="form2Example28"
                    className="block text-sm font-medium text-gray-700"
                  >
                    User name
                  </label>
                  <input
                    type="text"
                    id="form2Example28"
                    className="w-full px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="form2Example28"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="form2Example28"
                    className="w-full px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="form2Example28"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="form2Example28"
                    className="w-full px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
                  />
                </div>

                <div className="pt-1 mb-4 text-center">
                  <button
                    className="bg-blue-500 text-white w-full py-2 rounded-lg"
                    type="button"
                  >
                    Sign up
                  </button>
                </div>

                <p>
                  Already have an account?{" "}
                  <a href="#!" className="text-info">
                    Sign in
                  </a>
                </p>
              </form>
            </div>
          </div>
          <div className="sm:w-1/2 px-0 hidden sm:block bg-[#D9D9D9]"></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
