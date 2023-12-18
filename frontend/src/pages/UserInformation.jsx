import React, { useEffect, useState } from 'react'
import { Button } from "antd";
const UserInformation = () => {

    return (
        <div className="mt-4 mb-4 ml-2 mr-2 ">
            <div className="w-full">
                <div className="flex flex-row">
                    <div className="w-full text-black" style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",

                    }}>

                        <div className="block text-sm font-roboto " style={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontWeight: "600",
                            fontSize: "45px",
                            minWidth: "80%",
                        }}>
                            <span>Edit profile</span>
                            <div className="avatar"> Avatar</div>
                        </div>
                        <div className="flex items-center  h-custom-2 px-5 ms-xl-4 mt-2 pt-5 pt-xl-0 mt-xl-n5" style={{ minWidth: "70%" }} >

                            <form className=" p-5" style={{ minWidth: "100%" }} >


                                <div className="mb-1  flex " >
                                    <div className="firstname w-full mr-10">
                                        <label
                                            htmlFor="form2Example18"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="form2Example18"
                                            className="w-full px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
                                        />
                                    </div>
                                    <div className="lastname w-full ml-10">
                                        <label
                                            htmlFor="form2Example18"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="form2Example18"
                                            className="w-full px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
                                        />
                                    </div>

                                </div>
                                <div className="mb-1">
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


                                <div className="mb-1">
                                    <label
                                        htmlFor="form2Example28"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        id="form2Example28"
                                        className="w-full px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
                                    />
                                </div>
                                <div className="mb-1">
                                    <label
                                        htmlFor="form2Example28"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Contact Number
                                    </label>
                                    <input
                                        type="text"
                                        id="form2Example28"
                                        className="w-full px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
                                    />
                                </div>
                                <div className="mb-1 flex " >
                                    <div className="city w-full mr-10">
                                        <label
                                            htmlFor="form2Example18"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            id="form2Example18"
                                            className="w-full px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
                                        />
                                    </div>
                                    <div className="state w-full ml-10">
                                        <label
                                            htmlFor="form2Example18"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            State
                                        </label>
                                        <input
                                            type="text"
                                            id="form2Example18"
                                            className="w-full px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
                                        />
                                    </div>

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

                                <div className="pt-1 mb-4 ">
                                    <button
                                        className="  px-5 py-1 mr-5  rounded-lg " style={{ background: "white", color: "orange", border: "1px solid orange" }}
                                        type="button"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className=" text-white px-5 ml-5 py-1 rounded-lg" style={{ background: "orange", border: "1px solid orange" }}
                                        type="button"
                                    >
                                        Save
                                    </button>

                                </div>


                            </form>
                        </div>
                    </div>

                </div>
            </div >
        </div >
    )
}

export default UserInformation;

