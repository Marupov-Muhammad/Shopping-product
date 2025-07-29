import React from 'react'
import { Link, Outlet } from 'react-router'
import fastcart from '../../../shared/fast cart.png'
import component2 from '../../../shared/Component 2.png'
import wishlist1 from '../../../shared/Wishlist (1).png'
import cart1 from '../../../shared/Cart1.png'
import sendIcon from '../../../shared/icon-send.png'
import { useGetCartQuery } from '../../../futures/services/userApi'
import Accounts from '../../../accounts/acounts'
import { useUserId } from '../../../futures/services/useUserId'

const Layout = () => {
    let { data } = useGetCartQuery()
    const wish = JSON.parse(localStorage.getItem('wish'))
    let userId = useUserId()


    return (
        <div>
            <header className="pt-4 shadow fixed top-0 bg-white z-50 w-full ">
                <div className="flex flex-col lg:flex-row justify-between items-center w-[90%] mx-auto gap-4 lg:gap-0">
                    <div>
                        <img
                            src={fastcart}
                            alt="Fastcart logo"
                            className="w-28 md:w-32 lg:w-36"
                        />
                    </div>

                    <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base">
                        <Link to="/" className="hover:underline">Home</Link>
                        <Link to="/contact" className="hover:underline">Contact</Link>
                        <Link to="/about" className="hover:underline">About</Link>
                        <Link to="/sign-up" className="hover:underline">Sign Up</Link>
                    </nav>

                    <div className="flex items-center gap-3 sm:gap-4 relative flex-wrap justify-center">
                        <div className="hidden md:flex items-center w-[200px] lg:w-[250px] bg-[#F5F5F5] p-2 rounded-md">
                            <input
                                type="search"
                                placeholder="What are you looking for?"
                                className="w-full bg-transparent outline-none text-sm"
                            />
                            <img src={component2} alt="Search Icon" className="w-5 h-5 ml-2" />
                        </div>

                        <Link to="/wishlist" className="relative">
                            <img src={wishlist1} alt="Wishlist" className="w-6 h-6" />
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                                {wish?.length}
                            </span>
                        </Link>

                        <Link to="/karzinka" className="relative">
                            <img src={cart1} alt="Cart" className="w-6 h-6" />
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                                {data?.data[0].productsInCart.length}
                            </span>
                        </Link>
                        <Accounts />
                    </div>
                </div>

                <hr className="border-gray-200 mt-4" />
            </header>

            <main className="mt-4 px-4 sm:px-6 lg:px-8">
                <Outlet />
            </main>

            <footer className="bg-black text-white px-6 py-10 mt-[50px]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Exclusive</h3>
                        <p className="mb-1">Subscribe</p>
                        <p className="mb-4">Get 10% off your first order</p>
                        <form className="flex items-center gap-2 border rounded-sm p-[5px] border-white">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 rounded-md w-full border-none"
                            />
                            <img src={sendIcon} alt="" />
                        </form>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Support</h3>
                        <p className="mb-1">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                        <p className="mb-1">exclusive@gmail.com</p>
                        <p>+88015-88888-9999</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Account</h3>
                        <ul className="space-y-1">
                            <li>My Account</li>
                            <li>Cart</li>
                            <li>Wishlist</li>
                            <li>Shop</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Quick Link</h3>
                        <ul className="space-y-1">
                            <li>Privacy Policy</li>
                            <li>Terms Of Use</li>
                            <li>FAQ</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Social</h3>
                        <div className="flex gap-3">
                            <span className="hover:text-red-500 cursor-pointer">Facebook</span>
                            <span className="hover:text-red-500 cursor-pointer">Twitter</span>
                            <span className="hover:text-red-500 cursor-pointer">Instagram</span>
                            <span className="hover:text-red-500 cursor-pointer">LinkedIn</span>
                        </div>
                    </div>
                </div>

                <hr className='mt-[50px] text-gray-500' />

                <div className="mt-10 text-center text-sm text-gray-400">
                    © Copyright Rimel 2022. All right reserved.
                </div>
            </footer>


        </div>
    )
}

export default Layout
