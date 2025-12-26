import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Container from "../Components/Container";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <>
      <section>
        <Container>
          <div className="my-[64px]">
            <div className="">
              <h2 className="text-[49px] text-[#262626] font-bold font-sans">
                Checkout
              </h2>
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-x-2">
                <div className="">
                  <h3>home</h3>
                </div>
                <div className="">
                  <IoIosArrowForward />
                </div>
                <div className="">
                  <h3>Checkout</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="my-[64px]">
            <h3 className="text-[16px] text-[#262626] font-medium">
              Have a coupon? Click here to enter your code
            </h3>
          </div>

          <div className="">
            <div className="my-[64px]">
              <h2 className="text-[39px] font-bold text-[#262626]">
                Billing Details
              </h2>
            </div>
            <div className="flex gap-x-[300px] items-center">
              <div className="">
                <h2 className="text-[16px] font-bold text-[#262626] my-2">
                  First Name *
                </h2>
                <from>
                  <label htmlFor="">
                    <input
                      className="border-b-1 w-[300px]  py-2 border-[#262626] outline-none pl-2"
                      type="text"
                      placeholder="First Name"
                    />
                  </label>
                </from>
              </div>
              <div className="">
                <h2 className="text-[16px] font-bold text-[#262626] my-2">
                  Last Name *
                </h2>
                <from>
                  <label htmlFor="">
                    <input
                      className="border-b-1 py-2 w-[300px] border-[#262626] outline-none pl-2"
                      type="text"
                      placeholder="Last Name"
                    />
                  </label>
                </from>
              </div>
            </div>

            <div className="mt-[44px]">
              <div className="">
                <h2 className="text-[16px] font-bold text-[#262626] my-2">
                  Companye Name (optional)
                </h2>
                <from>
                  <label htmlFor="">
                    <input
                      className="border-b-1 py-2 w-[100%] border-[#262626] outline-none pl-2"
                      type="text"
                      placeholder="Companye Name"
                    />
                  </label>
                </from>
              </div>
            </div>

             <div className="mt-[44px]">
              <div className="">
                <h2 className="text-[16px] font-bold text-[#262626] my-2">
                  Country *
                </h2>
                <from>
                  <label htmlFor="">
                    <input
                      className="border-b-1 py-2 w-[100%] border-[#262626] outline-none pl-2"
                      type="text"
                      placeholder="Please select"
                    />
                  </label>
                </from>
              </div>
            </div>

             <div className="mt-[44px]">
              <div className="">
                <h2 className="text-[16px] font-bold text-[#262626] my-2">
                  Street Address *
                </h2>
                <from>
                  <label htmlFor="">
                    <input
                      className="border-b-1 py-2 w-[100%] border-[#262626] outline-none pl-2"
                      type="text"
                      placeholder="House number and street name"
                    />
                  </label>
                </from>
              </div>
            </div>


             <div className="mt-[44px]">
              <div className="">
                <from>
                  <label htmlFor="">
                    <input
                      className="border-b-1 py-2 w-[100%] border-[#262626] outline-none pl-2"
                      type="text"
                      placeholder="Apartment, suite, unit etc. (optional)"
                    />
                  </label>
                </from>
              </div>
            </div>

             <div className="mt-[44px]">
              <div className="">
                <h2 className="text-[16px] font-bold text-[#262626] my-2">
                 Town/City *
                </h2>
                <from>
                  <label htmlFor="">
                    <input
                      className="border-b-1 py-2 w-[100%] border-[#262626] outline-none pl-2"
                      type="text"
                      placeholder="Town/City"
                    />
                  </label>
                </from>
              </div>
            </div>


             <div className="mt-[44px]">
              <div className="">
                <h2 className="text-[16px] font-bold text-[#262626] my-2">
                  County (optional)
                </h2>
                <from>
                  <label htmlFor="">
                    <input
                      className="border-b-1 py-2 w-[100%] border-[#262626] outline-none pl-2"
                      type="text"
                      placeholder="County"
                    />
                  </label>
                </from>
              </div>
            </div>

             <div className="mt-[44px]">
              <div className="">
                <h2 className="text-[16px] font-bold text-[#262626] my-2">
                 Post Code *
                </h2>
                <from>
                  <label htmlFor="">
                    <input
                      className="border-b-1 py-2 w-[100%] border-[#262626] outline-none pl-2"
                      type="text"
                      placeholder="Post Code"
                    />
                  </label>
                </from>
              </div>
            </div>

             <div className="mt-[44px]">
              <div className="">
                <h2 className="text-[16px] font-bold text-[#262626] my-2">
                 Phone *
                </h2>
                <from>
                  <label htmlFor="">
                    <input
                      className="border-b-1 py-2 w-[100%] border-[#262626] outline-none pl-2"
                      type="text"
                      placeholder="Phone"
                    />
                  </label>
                </from>
              </div>
            </div>

             <div className="mt-[44px]">
              <div className="">
                <h2 className="text-[16px] font-bold text-[#262626] my-2">
                 Email Address *
                </h2>
                <from>
                  <label htmlFor="">
                    <input
                      className="border-b-1 py-2 w-[100%] border-[#262626] outline-none pl-2"
                      type="text"
                      placeholder="Email"
                    />
                  </label>
                </from>
              </div>
            </div>

             <div className="my-[64px]">
              <h2 className="text-[39px] font-bold text-[#262626]">
               Additional Information
              </h2>
            </div>
            <div className="mt-[44px]">
              <div className="">
                <h2 className="text-[16px] font-bold text-[#262626] my-2">
                 Other Notes (optional)
                </h2>
                <from>
                  <label htmlFor="">
                    <input
                      className="border-b-1 py-2 w-[100%] pb-[84px] border-[#262626] outline-none pl-2"
                      type="text"
                      placeholder="Notes about your order, e.g. special notes for delivery."
                    />
                  </label>
                </from>
              </div>
            </div>
          </div>

          <div className="">
            <div className="my-[64px]">
                <h2 className="text-[39px] font-bold text-[#262626]">Your Order</h2>
            </div>
            <div className="flex">
              <div className="border-1 border-[#262626] w-[250px]">
                  <h3 className="text-[16px] p-2 font-bold text-[#262626]">Product</h3>
              </div>
              <div className="border-1 border-[#262626] w-[250px]">
                  <h3 className="text-[16px] p-2 font-bold text-[#262626]">Total</h3>
              </div>
            </div>
             <div className="flex">
              <div className="border-1 border-[#262626] w-[250px]">
                  <h3 className="text-[16px] p-2 font-bold text-[#262626]">Product name x 1</h3>
              </div>
              <div className="border-1 border-[#262626] w-[250px]">
                  <h3 className="text-[16px] p-2 font-bold text-[#262626]">389.99 $</h3>
              </div>
            </div>
             <div className="flex">
              <div className="border-1 border-[#262626] w-[250px]">
                  <h3 className="text-[16px] p-2 font-bold text-[#262626]">Subtotal</h3>
              </div>
              <div className="border-1 border-[#262626] w-[250px]">
                  <h3 className="text-[16px] p-2 font-bold text-[#262626]">389.99 $</h3>
              </div>
            </div>
             <div className="flex">
              <div className="border-1 border-[#262626] w-[250px]">
                  <h3 className="text-[16px] p-2 font-bold text-[#262626]">Total</h3>
              </div>
              <div className="border-1 border-[#262626] w-[250px]">
                  <h3 className="text-[16px] p-2 font-bold text-[#262626]">389.99 $</h3>
              </div>
            </div>
          </div>

          <div className="my-[50px]">
            <Link to="/login">
              <button className="bg-[#262626] text-[#fff] px-12 py-3">Payment</button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Checkout;
