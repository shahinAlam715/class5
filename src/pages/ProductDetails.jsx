import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Container from '../Components/Container'
import { FaPlus, FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux'
import { addTocart } from '../Components/Slice/productSlice'

const ProductDetails = () => {

  let productId = useParams()

  let [singleproductid, setsingleproductid] = useState([])

  let getproductid = () => {
    axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {

      setsingleproductid(response.data);


    })
  }

  useEffect(() => {
    getproductid()
  }, [])





  let clientratings = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5
    return (

      singleproductid.rating > index + 1 ? <FaStar className='text-[24px] text-[gold]' /> :
        singleproductid.rating > number ? <FaStarHalfAlt className='text-[24px] text-[gold]' /> : <FaRegStar className='text-[24px] text-[gold]' />

    )
  })



  let [count, setcount] = useState(0)

  let handleplus = () => {
    if (count < 10) {
      setcount(count + 1)
    }
  }

  let handleminus = () => {
    if (count > 1) {
      setcount(count - 1)
    }
  }


  let [click, setclick] = useState(false)
  let [Rose, setRose] = useState(false)
  let clickRef = useRef()
  let RoseRef = useRef()


  useEffect(() => {

    document.addEventListener("click", (e) => {

      if (clickRef.current && clickRef.current.contains(e.target)) {
        setclick(!click)
      } else {
        setclick(false)
      }

      if (RoseRef.current && RoseRef.current.contains(e.target)) {
        setRose(!Rose)
      } else {
        setRose(false)
      }

    })



  }, [click, Rose])




  let discountprice = (singleproductid.price * singleproductid.discountPercentage) / 100

  let mainprice = singleproductid.price - discountprice


  let navigate = useNavigate()
  let dispatch = useDispatch()

  let handlecart = (item) => {
    dispatch(addTocart({...item, quantity:1}))
    toast("Add to Cart Successfully!")
    setTimeout(() => {
      navigate("/cart")
    }, 2000);

  }





  return (
    <>
      <section>
        <Container>

          <div className="">


            <div className="flex justify-center my-4">
              <img className='bg-[purple]' src={singleproductid.thumbnail} alt="" />
            </div>
            <div className="flex gap-x-4 items-center mt-[64px]">
              <div className="flex gap-x-2 items-center">
                {clientratings}
              </div>
              <div className="">
                <h2 className='text-[14px] font-medium'>Review</h2>
              </div>
            </div>


            <div className="flex gap-x-8 items-center py-2">

              <div className="">
                <del className='text-[16px] font-bold py-2 text-[#262626]'>$ {singleproductid.price}</del>
              </div>

              <div className="my-2">
                <h2 className='text-[16px] font-bold py-2 text-[#262626]'>$ {mainprice.toFixed(2)}</h2>
              </div>
            </div>



            <div className="flex gap-x-3 items-center">
              <div className="">
                <h1 className='text-[20px] font-medium'>Colour :</h1>
              </div>
              <div className="flex gap-x-2 items-center mt-4">

                <div className="h-[25px] w-[25px]">
                  <div className="bg-[red] h-[15px] w-[15px] rounded-full hover:w-[20px] hover:h-[20px]"></div>
                </div>

                <div className="h-[25px] w-[25px]">
                  <div className="bg-[green] h-[15px] w-[15px] rounded-full hover:w-[20px] hover:h-[20px]"></div>
                </div>

                <div className="h-[25px] w-[25px]">
                  <div className="bg-[blue] h-[15px] w-[15px] rounded-full hover:w-[20px] hover:h-[20px]"></div>
                </div>

                <div className="h-[25px] w-[25px]">
                  <div className="bg-[yellow] h-[15px] w-[15px] rounded-full hover:w-[20px] hover:h-[20px]"></div>
                </div>

                <div className="h-[25px] w-[25px]">
                  <div className="bg-[pink] h-[15px] w-[15px] rounded-full hover:w-[20px] hover:h-[20px]"></div>
                </div>

              </div>
            </div>

            <div className="flex gap-x-4 items-center my-6">
              <div className="">
                <h2 className='text-[20px] font-medium'>Size :</h2>
              </div>
              <div className="">
                <label htmlFor="">
                  <select className='outline-none border-1 w-[100px]' name="" id="">
                    <option value="">XS</option>
                    <option value="">S</option>
                    <option value="">M</option>
                    <option value="">L</option>
                    <option value="">XL</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="flex gap-x-3 items-center my-4">

              <div className="">
                <h2 className='text-[20px] font-medium'>QUANTITY :</h2>
              </div>

              <div className="flex gap-x-2 items-center">
                <button className='bg-[red] h-[30px] w-[60px] text-center leading-[30px] text-[24px] text-[#fff]' onClick={handleplus}> + </button>
                <h2 className=' border-2 bg-[red] h-[33px] w-[60px] text-center leading-[30px] text-[24px] text-[#fff]'> {count} </h2>
                <button className='bg-[red] h-[30px] w-[60px] text-center leading-[30px] text-[24px] text-[#fff]' onClick={handleminus}> - </button>
              </div>
            </div>


            <div className="flex gap-x-4 items-center my-6">
              <div className="">
                <h2 className='text-[20px] font-medium text-[#262626]'>STATUS :</h2>
              </div>
              <div className="">
                <h2 className='text-[20px] font-medium text-[#767676]'>In stock</h2>
              </div>
            </div>


            <div className="flex gap-x-6 my-10">


              <div className="">
                <button className='h-[60px] border-2 w-[200px] bg-[#262626] text-[#fff]'>Add to Wish List</button>
              </div>
              <div className="" onClick={()=>handlecart(singleproductid)}>
                <button className='h-[60px] border-2 w-[200px] bg-[#262626] text-[#fff]'>Add to Cart</button>
              </div>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />

            </div>



            <div className="my-2">

              <div className="flex justify-between items-center  w-[50%] border-2 py-3 px-4" ref={clickRef}>
                <div className="">
                  <h2 className='text-[20px] font-medium text-[#262626]' >FEATURES  & DETAILS</h2>
                </div>
                <div className="">
                  <MdKeyboardArrowDown className='text-[40px]' />
                </div>
              </div>

              {click &&
                <div className="">
                  <p className='text-[16px] text-[#767676]  w-[50%] py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              }

            </div>

            <div className="my-6">

              <div className="flex justify-between items-center  w-[50%] border-2 py-3 px-4" ref={RoseRef}>
                <div className="">
                  <h2 className='text-[20px] font-medium text-[#262626]' >SHIPPING & RETURNS</h2>
                </div>
                <div className="">
                  <MdKeyboardArrowDown className='text-[40px]' />
                </div>
              </div>

              {Rose &&
                <div className="">
                  <p className='text-[16px] text-[#767676]  w-[50%] py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              }

            </div>



          </div>
        </Container>
      </section>
    </>
  )
}

export default ProductDetails