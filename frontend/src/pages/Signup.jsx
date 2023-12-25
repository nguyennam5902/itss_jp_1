import React, { useEffect, useState } from "react";
import commonRoute from "../consts/api.js";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${commonRoute}register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      const result = await response.json();
      if (result.status === 200) {
        sessionStorage.setItem('user', JSON.stringify(result.data));
        console.log(JSON.parse(sessionStorage.getItem('user'))); 
        navigate("/");
      } 
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    setUserInfo({
      fullname: fullname,
      username: username,
      email: email,
      password: password,
    });
  }, [fullname, username, email, password]);

  return (
    <div className="mt-4 mb-4 ml-2 mr-2">
      <div className="w-full">
        <div className="flex flex-row">
          <div className="sm:w-1/2 text-black">
            <div className="px-5 ms-xl-4 text-center">
              <span className="text-3xl mb-0">Wellcome</span>
            </div>

            <div className="flex items-center h-custom-2 px-5 ms-xl-4 mt-2 pt-5 pt-xl-0 mt-xl-n5">
              <form
                className="w-full max-w-md mx-auto px-20 pb-40 pt-20"
                onSubmit={handleSignup}
              >
                <p className="text-sm">Welcome! Please enter your details.</p>

                <div className="mb-4 pt-3">
                  <label
                    // htmlFor="form2Example18"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Fullname
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    placeholder="fullname"
                    onChange={(e) => setFullname(e.target.value)}
                    rules={[
                      { required: true, message: "Please input this field!" },
                    ]}
                    className="w-full px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
                  />
                </div>

                <div className="mb-4">
                  <label
                    // htmlFor="form2Example28"
                    className="block text-sm font-medium text-gray-700"
                  >
                    User name
                  </label>
                  <input
                    type="text"
                    id="username"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                    rules={[
                      { required: true, message: "Please input this field!" },
                    ]}
                    className="w-full px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
                  />
                </div>

                <div className="mb-4">
                  <label
                    // htmlFor="form2Example28"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    rules={[
                      { required: true, message: "Please input this field!" },
                    ]}
                    className="w-full px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
                  />
                </div>

                <div className="mb-4">
                  <label
                    // htmlFor="form2Example28"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    rules={[
                      { required: true, message: "Please input this field!" },
                    ]}
                    className="w-full px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
                  />
                </div>
                <div className="mb-4">
                  <label
                    // htmlFor="form2Example28"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmpassword"
                    placeholder="confirm password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    rules={[
                      { required: true, message: "Please input this field!" },
                    ]}
                    className="w-full px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
                  />
                </div>

                <div className="pt-1 mb-4 text-center">
                  <button
                    className="bg-blue-500 text-white w-full py-2 rounded-lg"
                    type="submit"
                    // onClick={handleSignup}
                  >
                    Sign up
                  </button>
                </div>

                <p className="text-sm">
                  Already have an account?{" "}
                  <a href="login" className="text-blue-500">
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
