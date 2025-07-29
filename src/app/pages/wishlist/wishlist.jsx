import React from 'react'
import vector38 from '../../../shared/Vector (38).png'
import { useGetCartQuery } from '../../../futures/services/userApi'
import axios from 'axios'
import cart1 from '../../../shared/Cart1 (1).png'
import { Link } from 'react-router'
import GetData from '../../../entities/component/getData'
const Wishlist = () => {
  const { refetch: refetchCart } = useGetCartQuery()
  const wish = JSON.parse(localStorage.getItem('wish'))
  const token = localStorage.getItem('access_token')

  function deleteWish(id) {
    let update = wish.filter((e) => e.id != id)
    localStorage.setItem('wish', JSON.stringify(update))
    refetchCart()
  }

  function deleteWishAll() {
    let wish = []
    localStorage.setItem('wish', JSON.stringify(wish))
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
    <div className='w-[90%] m-auto'>
      <div className='flex justify-between'>
        <p>Wishlist ({wish.length})</p>
        <button onClick={deleteWishAll} className='border border-gray-500 p-[10px] px-[50px] rounded-sm cursor-pointer'>Remove All</button>
      </div>
      <div className='flex flex-wrap justify-center gap-6'>{wish?.map(e => (
        <div key={e.id} className='relative group bg-[#F5F5F5] rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-xl transition-all duration-300 w-[265px]'>
          <button onClick={() => deleteWish(e.id)} className='cursor-pointer bg-white p-2 rounded-full shadow-md hover:scale-110 transition'>
            <img src={vector38} alt="" />
          </button>
          <img className='w-full h-48 object-contain mx-auto transition-transform duration-300 group-hover:scale-105' src={`https://store-api.softclub.tj/images/${e.image}`} alt="" />
          <button
            onClick={() => addToCart(e)}
            className='cursor-pointer absolute bottom-20 left-1/2 transform -translate-x-1/2 w-[90%] bg-black text-white py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300'
          >
            <div className='flex justify-center items-center gap-3'>
              <img src={cart1} alt="" />
              Add To Cart
            </div>
          </button>

          <p className='text-lg font-semibold text-gray-800'>{e.productName}</p>
          <div className='flex items-center gap-2 text-base font-bold'>
            <p className='text-red-500'>${e.price}</p>
            {!e.hasDiscount && (
              <p className='line-through text-gray-400 text-sm'>
                {e.categoryId}
              </p>
            )}
          </div>
        </div>
      ))}
      </div>

      <div className='flex items-center mt-[100px] justify-between'>
        <div className="flex items-center gap-[20px]">
          <div className="bg-[#DB4444] h-[40px] w-[20px] rounded-sm"></div>
          <p className="text-[#DB4444]">Our Products</p>
        </div>
        <div>
          <Link to={'/product'}>
            <button className='border border-gray-500 rounded-sm p-[10px] px-[30px] cursor-pointer'>See All</button>
          </Link>
        </div>
      </div>

      <GetData />

    </div>
  )
}

export default Wishlist