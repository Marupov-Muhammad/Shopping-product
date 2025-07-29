import React, { useEffect, useState } from 'react'
import { useGetCartQuery, useGetProductQuery } from '../../futures/services/userApi'
import { Link } from 'react-router'
import axios from 'axios'
import { Heart } from 'lucide-react'
import cart1 from '../../shared/Cart1 (1).png'
const GetData = () => {
    const { data, refetch } = useGetProductQuery()
    const { refetch: refetchCart } = useGetCartQuery()
    const token = localStorage.getItem('access_token')

    const [wishList, setWishList] = useState(() => {
        const storedWish = localStorage.getItem('wish')
        return storedWish ? JSON.parse(storedWish) : []
    })

    useEffect(() => {
        localStorage.setItem('wish', JSON.stringify(wishList))
    }, [wishList])

    const isWish = (id) => {
        return wishList.some((el) => el.id === id)
    }

    const handleAddToWish = (item) => {
        if (isWish(item.id)) {
            const updatedWish = wishList.filter((el) => el.id !== item.id)
            setWishList(updatedWish)
        } else {
            setWishList([...wishList, item])
        }
        refetchCart()
    }

    const addToCart = async (item) => {
        try {
            await axios.post(
                `https://store-api.softclub.tj/Cart/add-product-to-cart?id=${item.id}`,
                { item },
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            )
            refetchCart()
            alert('Product added to cart!')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='mt-[40px]'>
            <div className='flex flex-wrap gap-6 justify-center'>
                {data?.data?.products.map((e) => (
                    <div
                        key={e.id}
                        className='relative group bg-[#F5F5F5] rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-xl transition-all duration-300 w-[265px]'
                    >
                        <span className='absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold shadow'>
                            -35%
                        </span>

                        <div className='absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'>
                            <button
                                onClick={() => handleAddToWish(e)}
                                className='cursor-pointer bg-white p-2 rounded-full shadow-md hover:scale-110 transition'
                            >
                               <Heart className={` ${isWish(e.id) ? 'fill-red-500' : 'fill-white'}`} />
                            </button>

                            <Link to={`/info/${e.id}`}>
                                <button className='cursor-pointer bg-white p-2 rounded-full shadow-md hover:scale-110 transition'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth={1.5}
                                        stroke='currentColor'
                                        className='w-5 h-5 text-gray-600'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z'
                                        />
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                                        />
                                    </svg>
                                </button>
                            </Link>
                        </div>

                        <img
                            className='w-full h-48 object-contain mx-auto transition-transform duration-300 group-hover:scale-105'
                            src={`https://store-api.softclub.tj/images/${e.image}`}
                            alt={e.productName}
                        />

                        <button
                            onClick={() => addToCart(e)}
                            className='cursor-pointer absolute bottom-24 left-1/2 transform -translate-x-1/2 w-[85%] bg-black text-white py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300'
                        >
                            <div className='flex justify-center items-center gap-3'>
                                <img src={cart1} alt="" />
                                Add To Cart
                            </div>
                        </button>

                        <div className='mt-5 space-y-1'>
                            <h3 className='text-lg font-semibold text-gray-800'>
                                {e.productName}
                            </h3>

                            <div className='flex gap-2 text-base font-bold'>
                                <p className='text-red-500'>${e.price}</p>
                                {!e.hasDiscount && (
                                    <p className='line-through text-gray-400 text-sm'>
                                        {e.categoryId}
                                    </p>
                                )}
                            </div>

                            <div className='flex items-center gap-1 text-sm text-gray-500'>
                                <div className='text-yellow-400'>★★★★☆</div>
                                <span>(75)</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GetData

