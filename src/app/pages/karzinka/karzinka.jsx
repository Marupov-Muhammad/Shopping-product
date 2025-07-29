import React from 'react'
import {
  useClearCartMutation,
  useDeleteInCartMutation,
  useDicreaseCartProductMutation,
  useGetCartQuery,
  useIncreaseCartProductMutation
} from '../../../futures/services/userApi'
import iconCancel from '../../../shared/icon-cancel.png'
import { Link } from 'react-router'

const Karzinka = () => {
  const { data, refetch } = useGetCartQuery()
  let [deleteInCart] = useDeleteInCartMutation()
  let [increaseCartProduct] = useIncreaseCartProductMutation()
  let [dicreaseCartProduct] = useDicreaseCartProductMutation()
  let [clearCart] = useClearCartMutation()

  async function deleteCart(id) {
    await deleteInCart(id)
    refetch()
  }
  async function clearCarts() {
    await clearCart()
    refetch()
  }
  async function increaseCart(id) {
    await increaseCartProduct(id)
    refetch()
  }
  async function dicreaseCart(id) {
    await dicreaseCartProduct(id)
    refetch()
  }

  let sum = 0
  let amout = 0

  data && data.data[0].productsInCart?.map((e) => {
    sum = e.product.price
    amout += e.quantity
  })

  return (
    <div className="w-[90%] mx-auto px-4 py-8 sm:px-6 md:px-10 lg:px-14 xl:px-20">
      <p className="text-gray-500 mb-6 text-sm sm:text-base">
        Home / <span className="text-black font-medium">Cart</span>
      </p>

      <div className="hidden sm:flex justify-between px-6 py-3 bg-gray-100 rounded-md text-sm font-semibold text-gray-600 mb-4">
        <p className="w-1/2">Product</p>
        <p className="w-1/6 text-center">Price</p>
        <p className="w-1/6 text-center">Quantity</p>
        <p className="w-1/6 text-right">Subtotal</p>
      </div>

      {data?.data[0]?.productsInCart?.map((e) => (
        <div
          key={e.product.id}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 bg-white rounded-xl shadow-sm mb-4 hover:shadow-md transition"
        >
          <div className="flex items-center gap-4 w-full sm:w-1/2">
            <img
              className="w-20 h-20 object-cover rounded-md border border-gray-200"
              src={`https://store-api.softclub.tj/images/${e.product.image}`}
              alt={e.product.productName}
            />
            <p className="text-gray-800 font-medium">{e.product.productName}</p>
          </div>

          <p className="w-full sm:w-1/6 text-center text-gray-700">${e.product.price.toFixed(2)}</p>

          <div className="w-full sm:w-1/6 flex justify-center">
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <span className="px-4 py-2 text-gray-800">{e.quantity}</span>
              <div className="flex flex-col border-l border-gray-300">
                <button onClick={() => increaseCart(e.id)} className="px-2 py-1 hover:bg-gray-100">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  </svg>
                </button>
                <button onClick={() => dicreaseCart(e.id)} className="px-2 py-1 hover:bg-gray-100">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <p className="w-full sm:w-1/6 text-right text-gray-900 font-semibold">
            ${(e.quantity * e.product.price).toFixed(2)}
          </p>

          <img
            className="cursor-pointer w-5 h-5 sm:ml-2"
            onClick={() => deleteCart(e.id)}
            src={iconCancel}
            alt="Remove"
          />
        </div>
      ))}

      <div className='flex flex-col sm:flex-row justify-between items-center gap-4 mt-[50px]'>
        <div>
          <Link to={'/product'}>
            <button className='border cursor-pointer border-gray-500 p-[15px] px-[50px] rounded-sm'>
              Return To Shop
            </button>
          </Link>
        </div>
        <div className='flex flex-col sm:flex-row gap-4'>
          <button className='border cursor-pointer border-gray-500 p-[15px] px-[50px] rounded-sm'>Update Cart</button>
          <button onClick={() => clearCarts()} className='border cursor-pointer border-[#DB4444] text-[#DB4444] p-[15px] px-[50px] rounded-sm'>
            Remove all
          </button>
        </div>
      </div>

      <div className="w-full px-4 sm:px-8 mt-[100px]">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-1/2">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border border-black px-4 py-2 w-full sm:w-auto"
            />
            <button className="border border-red-500 text-red-500 px-6 py-2 rounded hover:bg-red-50 transition">
              Apply
            </button>
          </div>

          <div className="border border-black rounded p-4 sm:p-6 w-full md:w-2/3 lg:w-1/3">
            <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>$ {sum * amout}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <hr className="mb-4" />
            <div className="flex justify-between mb-6">
              <span className="font-semibold text-lg">Total:</span>
              <span className="font-bold text-lg">$ {sum * amout}</span>
            </div>
            <Link to={'/checkout'}>
              <button className="bg-red-500 text-white px-6 py-3 w-full rounded hover:bg-red-600 transition cursor-pointer">
                Proceed to checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Karzinka
