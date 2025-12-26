import React, { useState } from "react";
import Container from "../Components/Container";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");

  let handleemailemail = (e) => {
    setemail(e.target.value);
  };

  let handlepass = (e) => {
    setpassword(e.target.value);
  };

  let handleemailpasslogin = () => {
    console.log(email, password);

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setemail("")
        setpassword("")
        const user = userCredential.user;
        
        toast.success("Sing in Successfull")
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
       toast.error(errorCode)
        
      });
  };

  return (
    <section>
      <div className="">
        <Toaster/>
      </div>
      <Container>
        <div className="my-[64px]">
          <div className="">
            <h2 className="text-[49px] text-[#262626] font-bold font-sans">
              Log In
            </h2>
          </div>
          <div className="mt-4">
            <div className="flex items-center gap-x-2 cursor-pointer">
              <div className="">
                <h3>Home</h3>
              </div>
              <div className="">
                <IoIosArrowForward />
              </div>
              <div className="">
                <Link to="/login">
                  <h3>Log In</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="my-[64px]">
          <h3 className="text-[16px] text-[#262626] font-medium pr-[600px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </h3>
        </div>

        <div className="">
          <div className="my-[64px]">
            <h2 className="text-[39px] font-bold text-[#262626]">
              Your Personal Details
            </h2>
          </div>

          <from>
            <div className="flex gap-x-[300px] items-center mt-[50px]">
              <div className="">
                <h2 className="text-[16px] font-bold text-[#262626] my-2">
                  Email address
                </h2>
                <label htmlFor="">
                  <input
                    onChange={handleemailemail}
                    className="border-b-1 w-[300px]  py-2 border-[#262626] outline-none pl-2"
                    type="email"
                    placeholder="company@domain.com"
                  />
                </label>
              </div>
              <div className="">
                <div className="">
                  <h2 className="text-[16px] font-bold text-[#262626] my-2">
                    Password
                  </h2>
                  <label htmlFor="">
                    <input
                      onChange={handlepass}
                      className="border-b-1 w-[300px]  py-2 border-[#262626] outline-none pl-2"
                      type="Password"
                      placeholder="Password"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="my-[50px]">
              <button
                onClick={handleemailpasslogin}
                className="bg-[#262626] text-[#fff] px-12 py-3"
                type="submit"
              >
                Log In
              </button>
            </div>
          </from>
        </div>

        <div className="">
          <div className="mt-[64px]">
            <h2 className="text-[49px] text-[#262626] font-bold font-sans">
              New Customer
            </h2>
          </div>
          <div className="my-[44px]">
            <h3 className="text-[16px] text-[#262626] font-medium pr-[600px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the. industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the.
            </h3>
          </div>

          <div className="my-[50px]">
            <Link to="/singup">
              <button
                className="bg-[#262626] text-[#fff] px-12 py-3"
                type="submit"
              >
                Sing Up
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Login;
