import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import axios from 'axios'
import foutStar from '../../../shared/Four Star.png'
import GetData from '../../../entities/component/getData'
import { Heart } from 'lucide-react'
import iconDelivery from '../../../shared/icon-delivery.png'
import iconReturn from '../../../shared/Icon-return.png'
import { useGetCartQuery, useGetProductQuery } from '../../../futures/services/userApi'
const Info = () => {
  let { id } = useParams()
  const [cnt, setCnt] = useState(0);
  const { data, refetch } = useGetProductQuery()
  const { refetch: refetchCart } = useGetCartQuery()
  let [producted, setProducted] = useState([])
  async function getById() {
    try {
      let { data } = await axios.get(`https://store-api.softclub.tj/Product/get-product-by-id?id=${id}`)
      setProducted(data.data)
      console.log(data.data);

    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getById()
  }, [id])


  function increase() {
    setCnt(cnt + 1)
  }

  function decriment() {
    if (cnt > 0) {
      setCnt(cnt - 1)
    }
  }

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


  return (
    <div className='w-[90%] m-auto mt-[140px]'>

      <p className='text-[gray]'>Account /<span>  Gaming /</span> <span className='text-[black]'>  Havic HV G-92 Gamepad</span></p>

      <div className='flex items-center mt-[20px] gap-[100px]'>

        <div className='flex items-center gap-[20px]'>
          <div>

            {producted.users && producted.users.map((e) => {
              return <div key={e.id}>

                <div className='bg-[#F5F5F5] p-[20px] rounded-sm'>
                  {producted.images && producted.images.map((e) => {
                    return <div key={e.id} className='w-[130px] h-[130px]'>
                      <img className='w-full h-full object-cover' src={`https://store-api.softclub.tj/images/${e.images}`} alt="" />
                    </div>
                  })}
                </div>
                <div className='bg-[#F5F5F5]  p-[20px] rounded-sm mt-[27px]'>
                  {producted.images && producted.images.map((e) => {
                    return <div key={e.id} className='w-[130px] h-[130px]'>
                      <img className='w-full h-full object-cover' src={`https://store-api.softclub.tj/images/${e.images}`} alt="" />
                    </div>
                  })}
                </div>
                <div className='bg-[#F5F5F5]  p-[20px] rounded-sm mt-[27px]'>
                  {producted.images && producted.images.map((e) => {
                    return <div key={e.id} className='w-[130px] h-[130px]'>
                      <img className='w-full h-full object-cover' src={`https://store-api.softclub.tj/images/${e.images}`} alt="" />
                    </div>
                  })}
                </div>
                <div className='bg-[#F5F5F5]  p-[20px] rounded-sm mt-[27px]'>
                  {producted.images && producted.images.map((e) => {
                    return <div key={e.id} className='w-[130px] h-[130px]'>
                      <img className='w-full h-full object-cover' src={`https://store-api.softclub.tj/images/${e.images}`} alt="" />
                    </div>
                  })}
                </div>
              </div>
            })}
          </div>
          <div className='bg-[#F5F5F5] w-[500px] h-[600px] rounded-sm flex items-center p-[20px]'>
            {producted.images && producted.images.map((e) => {
              return <div key={e.id}>
                <img className='w-[800px]' src={`https://store-api.softclub.tj/images/${e.images}`} alt="" />
              </div>
            })}
          </div>

        </div>
        <div>
          <div>
            <p className='font-bold text-[25px]'>{producted.productName}</p>
            <div className='flex gap-[10px] items-center mt-[20px]'>
              <img className='w-[150px]' src={foutStar} alt="" />
              <p className='text-[gray] text-[19px]'>(150 Reviews)</p> |
              <p className='text-[#12CA5B] text-[19px] font-bold'>In Stock</p>
            </div>
            <p className='font-bold text-[20px] mt-[20px]'>
              {cnt > 0
                ? `Real Price: $${(cnt * producted.price).toFixed(2)}`
                : `Price: $${(producted.price || 0).toFixed(2)}`
              }
            </p>




            <p className='text-[gray] text-[20px] mt-[20px]'>{producted.description}</p>
            <hr className='mt-[10px] text-[gray]' />
            <div className='flex items-center gap-[30px] mt-[20px]'>
              <p className='text-[30px] font-medium'>Colours:</p>
              <p className='w-[40px] h-[40px] rounded-full border-2 ' style={{ backgroundColor: producted.color }}></p>
            </div>
            <div className='flex items-center gap-[20px] mt-[30px]'>
              <div>
                <p className='text-[30px]'>Size:</p>
              </div>
              <div className='flex gap-[10px]'>
                <div>
                  <p className='border rounded-md w-[50px] text-center p-[10px] hover:bg-red-500 hover:text-white'>XS</p>
                </div>
                <div>
                  <p className='border rounded-md w-[50px] text-center p-[10px] hover:bg-red-500 hover:text-white'>S</p>
                </div>
                <div>
                  <p className='border rounded-md w-[50px] text-center p-[10px] hover:bg-red-500 hover:text-white'>M</p>
                </div>
                <div>
                  <p className='border rounded-md w-[50px] text-center p-[10px] hover:bg-red-500 hover:text-white'>L</p>
                </div>
                <div>
                  <p className='border rounded-md w-[50px] text-center p-[10px] hover:bg-red-500 hover:text-white'>XL</p>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-[50px] flex justify-between items-center flex-wrap gap-4'>
            <div className="flex items-center w-[183px] border border-gray-500 rounded-md overflow-hidden">
              <button
                onClick={decriment}
                className="px-6 py-2 font-bold text-center border-r border-gray-500 hover:bg-red-500 hover:text-white"
              >
                -
              </button>
              <p className="flex-1 px-6 text-center font-bold text-lg select-none">
                {cnt}
              </p>
              <button
                onClick={increase}
                className="px-6 py-2 font-bold text-center border-l border-gray-500 hover:bg-red-500 hover:text-white"
              >
                +
              </button>
            </div>

            <div>
              <Link to={'/'}>
                <button onClick={() => alert('You by this product!')} className=' cursor-pointer font-bold text-[20px] bg-[#DB4444] text-white py-[10px] px-[50px] rounded-md hover:bg-[#c33] transition'>
                  Buy Now
                </button>
              </Link>
            </div>

            <div className='flex gap-2'>
              {producted.users && producted.users.map((e) => (
                <button
                  key={e.id}
                  onClick={() => handleAddToWish(e)}
                  className="border border-gray-500 p-[10px] rounded-md hover:border-red-500 transition"
                >
                  <Heart
                    className={` ${isWish(e.id) ? 'fill-red-500' : 'fill-white'}`}
                  />
                </button>

              ))}
            </div>
          </div>
          <div className="border border-gray-500 max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-4 mt-[20px]">
            <div className="flex items-start space-x-4">
              <img src={iconDelivery} alt="Delivery Icon" className="w-8 h-8 mt-1" />
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Free Delivery</h3>
                <p className="text-sm text-gray-600">
                  Enter your postal code for Delivery Availability.
                </p>
              </div>
            </div>
            <hr className='text-[gray]' />
            <div className="flex items-start space-x-4">
              <img src={iconReturn} alt="Return Icon" className="w-8 h-8 mt-1" />
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Return Delivery</h3>
                <p className="text-sm text-gray-600">
                  Free 30 Days Delivery Returns. <span className="underline cursor-pointer">Details</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-[20px] mt-[100px]">
        <div className="bg-[#DB4444] h-[40px] w-[20px] rounded-sm"></div>
        <p className="text-[#DB4444] font-semibold">Related Item</p>
      </div>

      <div>
        <GetData />
      </div>

    </div>
  )
}

export default Info