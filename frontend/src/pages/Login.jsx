import React from "react";
const Login = async () => {

    return (
        <div className=" mt-4 mb-4 ml-2 mr-2">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 text-black ">

                        <div className="px-5 ms-xl-4 text-center">

                            <span className="h1 mb-0">Wellcome back</span>
                        </div>

                        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-2 pt-5 pt-xl-0 mt-xl-n5">

                            <form class="w-60  " style="padding-left: 8rem;">
                                <p class="small"> Welcome back! Please enter your details.</p>


                                <div class="form-outline mb-4 pt-3">
                                    <label class="form-label" for="form2Example18">Email </label>
                                    <input type="email" id="form2Example18" class="form-control form-control-lg" />

                                </div>

                                <div class="form-outline mb-4">
                                    <label class="form-label" for="form2Example28">Password</label>
                                    <input type="password" id="form2Example28" class="form-control form-control-lg" />

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">Remember for 30 days

                                    </label>
                                </div>

                                <div class="pt-1 mb-4 text-center">
                                    <button class=" btn-block" type="button">Login</button>
                                </div>

                                <p>Don't have an account? <a href="#!" class="link-info">Register here</a></p>
                                <p class=" mb-5 pb-lg-2"><a href="#!">Forgotten password?</a>
                                </p>

                            </form>

                        </div>

                    </div>
                    <div class="col-sm-6 px-0 d-none d-sm-block bg-dark">

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;
