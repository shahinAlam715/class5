import React, { useState } from "react";
import Container from "../Components/Container";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword , sendEmailVerification } from "firebase/auth";
import toast, { Toaster } from 'react-hot-toast';

const Singup = () => {

  let navigate = useNavigate()

 const auth = getAuth();

 let [email, setemail] = useState("");
 let [password, setpassword] = useState("");

 let handleemail = (e)=>{
      setemail(e.target.value);
      
 }

 let handlepassword = (e)=>{
       setpassword(e.target.value);
 }


 let handleemailpass = ()=>{
    console.log(email, password);
    //  e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {

    sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    setemail("")
    setpassword("")
    const user = userCredential.user;
    console.log(user);
  
    toast.success("Account Created !")

    setTimeout(()=>{
      navigate("/login")

    }, 2000)
   
    
  });
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.error(errorCode);
    
  });
    
 }


  return (
    <section>
      <div className="">
         <Toaster />
      </div>
      <Container>
        <div className="my-[64px]">
          <div className="">
            <h2 className="text-[49px] text-[#262626] font-bold font-sans">
              SingUp
            </h2>
          </div>
          <div className="mt-4">
            <div className="flex items-center gap-x-2 cursor-pointer">
              <div className="">
                <h3>Sing Up</h3>
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
          <div className="flex gap-x-[300px] items-center">
            <div className="">
              <h2 className="text-[16px] font-bold text-[#262626] my-2">
                First Name *
              </h2>
                <label htmlFor="">
                  <input
                    className="border-b-1 w-[300px]  py-2 border-[#262626] outline-none pl-2"
                    type="text"
                    placeholder="First Name"
                  />
                </label>
             
            </div>
            <div className="">
              <h2 className="text-[16px] font-bold text-[#262626] my-2">
                Last Name *
              </h2>
             
                <label htmlFor="">
                  <input
                    className="border-b-1 py-2 w-[300px] border-[#262626] outline-none pl-2"
                    type="text"
                    placeholder="Last Name"
                  />
                </label>
            </div>
          </div>
          <div className="flex gap-x-[300px] items-center mt-[50px]">
            <div className="">
              <h2 className="text-[16px] font-bold text-[#262626] my-2">
                Email address
              </h2>
                <label htmlFor="">
                  <input onChange={handleemail} value={email}
                    className="border-b-1 w-[300px]  py-2 border-[#262626] outline-none pl-2"
                    type="email"
                    placeholder="company@domain.com"/>
                </label>
             
            </div>
            <div className="">
              <h2 className="text-[16px] font-bold text-[#262626] my-2">
               Telephone
              </h2>
             
                <label htmlFor="">
                  <input
                    className="border-b-1 py-2 w-[300px] border-[#262626] outline-none pl-2"
                    type="number"
                    placeholder="Your phone number"
                  />
                </label>
            </div>
          </div>

          <div className="flex gap-x-[300px] items-center mt-[50px]">
            <div className="">
              <h2 className="text-[16px] font-bold text-[#262626] my-2">
               Password
              </h2>
                <label htmlFor="">
                  <input onChange={handlepassword} value={password}
                    className="border-b-1 w-[300px]  py-2 border-[#262626] outline-none pl-2"
                    type="Password"
                    placeholder="Password"
                  />
                </label>
             
            </div>
            <div className="">
              <h2 className="text-[16px] font-bold text-[#262626] my-2">
                 Repeat Password
              </h2>
             
                <label htmlFor="">
                  <input
                    className="border-b-1 py-2 w-[300px] border-[#262626] outline-none pl-2"
                    type="password"
                    placeholder="Repeat Password"
                  />
                </label>
            </div>
          </div>

            <div className="my-[50px]">
                <button onClick={handleemailpass} className="bg-[#262626] text-[#fff] px-12 py-3" type="submit">
                   Sing Up
                </button>
            </div>

              </from>

        </div>
      </Container>
    </section>
  );
};

export default Singup;
