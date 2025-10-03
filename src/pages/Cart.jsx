import React, { useState } from 'react'
import Container from '../Components/Container'
import { IoIosArrowForward } from 'react-icons/io'
import { RxCross2 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, productRemove } from '../Components/Slice/productSlice'
import { Link } from 'react-router-dom'

const Cart = () => {

  let data = useSelector((state) => state.product.cartItem)


  let { totallprice, totalquantity } = data.reduce((acc, item) => {

    acc.totallprice += item.price * item.quantity
    acc.totalquantity += item.quantity

    return acc;

  }, { totallprice: 0, totalquantity: 0 })







  let dispatch = useDispatch()

  let handleincrement = (i) => {
    dispatch(increment(i))
  }


  let handledecrement = (i) => {
    dispatch(decrement(i))
  }

  let handleproductRemove = (i)=>{  

      dispatch(productRemove(i))

    }
  
  



  return (
    <>
      <section>
        <Container>

          <div className="">
            <h2 className='text-[#262626] text-[49px] font-bold'>Cart</h2>
            <h3 className='flex items-center my-2 text-[#6D6D60] text-[12px]
             font-medium'>Home <IoIosArrowForward /> Cart</h3>
          </div>

           
         
          {data.length > 0 ?
          data.map((item, i) => (
            <div className="mt-[64px] border-2 border-[#F5F5F3]">

              <div className="flex bg-[#F5F5F3] py-2 px-2">
                <div className="w-2/8">
                  <div className="">
                    <h2 className='text-[16px] text-[#262626]
                     font-bold'>Product</h2>
                  </div>
                </div>
                <div className="w-2/8">
                  <div className="">
                    <h2 className='text-[16px] text-[#262626]
                     font-bold'>Price</h2>
                  </div>
                </div>
                <div className="w-2/8">
                  <div className="">
                    <h2 className='text-[16px] text-[#262626]
                     font-bold'>Quantity</h2>
                  </div>
                </div>
                <div className="w-2/8">
                  <div className="">
                    <h2 className='text-[16px] text-[#262626]
                     font-bold'>Total</h2>
                  </div>
                </div>


              </div>

              <div className="flex items-center my-4 px-2">
                <div className="w-2/8">
                  <div className="flex items-center gap-x-2">


                    <div className="" onClick={() =>handleproductRemove(i)}>
                      <RxCross2 />
                    </div>




                    <div className="">
                      <img className='h-[100px] w-[100px]' src={item.thumbnail} alt="" />
                    </div>
                    <div className="">
                      <h2 className='text-[16px] text-[#262626]
                     font-bold'>{item.title}</h2>
                    </div>
                  </div>
                </div>
                <div className="w-2/8">
                  <div className="">
                    <h2 className='text-[16px] text-[#262626]
                     font-bold'>${item.price}</h2>
                  </div>
                </div>
                <div className="w-2/8">
                  <div className="flex gap-x-2 items-center">
                    <button onClick={() => handleincrement(i)} className='bg-[red] h-[30px]
                   w-[60px] text-center leading-[30px] text-[24px] text-[#fff]'> + </button>
                    <h2 className=' border-2 bg-[red] h-[33px] w-[60px] text-center leading-[30px]
                   text-[24px] text-[#fff]'> {item.quantity} </h2>
                    <button onClick={() => handledecrement(i)} className='bg-[red] h-[30px] w-[60px]
                   text-center leading-[30px] text-[24px] text-[#fff]'> - </button>
                  </div>
                </div>
                <div className="w-2/8">
                  <div className="">
                    <h2 className='text-[16px] text-[#262626]
                     font-bold'>{(item.price * item.quantity).toFixed(2)}</h2>
                  </div>
                </div>
              </div>

            </div>
          )) : <div className="bg-[yellow] py-4 my-8">
            <h2 className='text-[50px] text-[red] text-center py-5 px-2'>No Data</h2>
          </div> 
          }

          <div className="flex border-2 border-[#F5F5F3] py-2 px-2 items-center">
            <div className="w-2/8">
              <div className="">

                <div className="flex justify-between border-2 border-[#F5F5F3] py-2 px-2">
                  <h2>Size</h2>
                  <label htmlFor="">
                    <select name="" id="" className='outline-none'>
                      <option value="">XS</option>
                      <option value="">S</option>
                      <option value="">M</option>
                      <option value="">L</option>
                      <option value="">XL</option>
                    </select>
                  </label>
                </div>


              </div>
            </div>

            <div className="w-5/8 flex justify-between">
              <div className="">
                <h2 className='text-[14px] pl-3 text-[#262626]
                     font-bold'>Apply coupon</h2>
              </div>
              <div className="">
                <h2 className='text-[14px] text-[#262626]
                     font-bold'>Update cart</h2>
              </div>
            </div>


          </div>




          <div className="text-end mt-6 pr-2">
            <h2 className='text-[20px] text-[#262626]
                     font-bold'>Cart totals</h2>
          </div>


          <div className=" mt-5">

            <div className="flex justify-end pr-2">
              <div className="border-1 h-[50px] w-[150px]">
                <h2 className='text-center leading-[50px] text-[16px] text-[#262626]
                     font-bold'>Subtotalitem</h2>
              </div>
              <div className="border-1 h-[50px] w-[150px]">
                <h2 className='text-[16px] text-[#767676] text-center leading-[50px]
                     font-bold'>{data.length}</h2>
              </div>

            </div>

            <div className="flex justify-end pr-2">
              <div className="border-1 h-[50px] w-[150px]">
                <h2 className='text-center leading-[50px] text-[16px] text-[#262626]
                     font-bold'>TotallQuantity</h2>
              </div>
              <div className="border-1 h-[50px] w-[150px]">
                <h2 className='text-[16px] text-[#767676] text-center leading-[50px]
                     font-bold'>{totalquantity}</h2>
              </div>

            </div>


            <div className="flex justify-end pr-2">
              <div className="border-1 h-[50px] w-[150px]">
                <h2 className='text-center leading-[50px] text-[16px] text-[#262626]
                     font-bold'>Total</h2>
              </div>
              <div className="border-1 h-[50px] w-[150px]">
                <h2 className='text-[16px] text-[#767676] text-center leading-[50px]
                     font-bold'>{(totallprice).toFixed(2)}</h2>
              </div>


            </div>

            <div className="flex justify-end mt-5 pr-2">
              <Link to="\checout">
              <button className='bg-[#262626] text-[#fff]
               text-[14px] cursor-pointer py-3 px-6'>Proceed to Checkout</button>
              </Link>
            </div>

          </div>

         
         


        </Container>
      </section>
    </>
  )
}

export default Cart