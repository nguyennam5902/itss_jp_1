import React, { useEffect, useState } from "react";
import { Button } from "antd";
import commonRoute from "../consts/api";
import { useNavigate, useParams } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${commonRoute}login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      const result = await response.json();
      if (result.status == 200) {
        // Store user information as a JSON string in sessionStorage
        sessionStorage.setItem('user', JSON.stringify(result.data));
        console.log(JSON.parse(sessionStorage.getItem('user'))); 
        if (result.data.username == "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        const errorData = await response.json();
        console.error(errorData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    setUserInfo({ email: email, password: password });
  }, [email, password]);

  return (
    <div class="main_screen">
      <div className="mt-4 mb-4 ml-2 mr-2 h-full w-full">
        <div className="w-full">
          <div className="flex flex-row">
            <div className="sm:w-1/2 text-black">
              <div className="px-5 ms-xl-4 text-center">
                <span className="text-3xl mb-0">Welcome back</span>
              </div>

              <div className="flex items-center h-custom-2 px-5 ms-xl-4 mt-2 pt-5 pt-xl-0 mt-xl-n5">
                <form
                  className="w-full max-w-md mx-auto px-20 py-40"
                  onSubmit={handleLogin}
                >
                  <p className="text-sm">
                    Welcome back! Please enter your details.
                  </p>

                  <div className="mb-4 pt-3">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      // htmlFor="form2Example18"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      // htmlFor="form2Example28"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="pasword"
                      placeholder="password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      className="form-checkbox"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="ml-2 text-sm text-gray-700"
                      htmlFor="flexCheckDefault"
                    >
                      Remember for 30 days
                    </label>
                  </div>

                  <div className="pt-1 mb-4 text-center">
                    <button
                      className="bg-blue-500 text-white w-full py-2 rounded-lg"
                      type="submit"
                    >
                      Log in
                    </button>
                  </div>

                  <p className="text-sm">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-blue-500">
                      Sign up here
                    </a>
                  </p>
                  <p className="mb-5 pb-lg-2 text-sm">
                    <a href="#!" className="text-blue-500">
                      Forgotten password?
                    </a>
                  </p>
                </form>
              </div>
            </div>
            <div className="sm:w-1/2 px-0 hidden sm:block bg-[#D9D9D9]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
