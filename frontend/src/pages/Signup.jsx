import React from "react";
const Signup = async () => {

    return (
        <div className=" mt-4 mb-4 ml-2 mr-2">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 text-black ">

                        <div className="px-5 ms-xl-4 text-center">

                            <span className="h1 mb-0">Wellcome</span>
                        </div>

                        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-2 pt-5 pt-xl-0 mt-xl-n5">

                            <form className="w-60  " style="padding-left: 8rem;">
                                <p className="small"> Welcome! Please enter your details.</p>


                                <div className="form-outline mb-4 pt-3">
                                    <label className="form-label" for="form2Example18">Fullname </label>
                                    <input type="email" id="form2Example18" className="form-control form-control-lg" />

                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" for="form2Example28">User name</label>
                                    <input type="password" id="form2Example28" className="form-control form-control-lg" />

                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label" for="form2Example28">Email</label>
                                    <input type="password" id="form2Example28" className="form-control form-control-lg" />

                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label" for="form2Example28">Password</label>
                                    <input type="password" id="form2Example28" className="form-control form-control-lg" />

                                </div>


                                <div className="pt-1 mb-4 text-center">
                                    <button className=" btn-block" type="button">Sign up</button>
                                </div>

                                <p>Already have an account? <a href="#!" className="link-info">Sign in</a></p>


                            </form>

                        </div>

                    </div>
                    <div className="col-sm-6 px-0 d-none d-sm-block bg-dark">

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signup;
