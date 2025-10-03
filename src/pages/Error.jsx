import React from 'react'
import Container from '../Components/Container'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <>
            <section>
                <Container>
                    <div className="">
                        <div className="">
                            <h1 className='text-[200px] text-[#262626] font-bold text-center'>404</h1>
                            <h2 className='text-[16px] text-[#767676] font-medium text-center px-[400px]'>The page you were looking for couldn't be found. The page could be removed
                                or you misspelled the word while searching for it. Maybe try a search?</h2>

                            <div className="relative flex justify-center my-4">
                                <div className="">
                                    <input className='border-2 border-[#767676] py-2 pl-2 outline-none
                             w-[400px]' type="text" placeholder='Type to search' />
                                </div>
                                <div className="absolute top-[10px] left-[800px]">
                                    <FaSearch className='text-[20px] 
                                      text-[#262626]'/>
                                </div>

                            </div>
                        </div>
                        <div className="flex justify-center my-4">
                            <button className='py-3 px-6 bg-[#262626] text-[#fff] text-[14px]'><Link to="/">Back to Home</Link></button>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Error