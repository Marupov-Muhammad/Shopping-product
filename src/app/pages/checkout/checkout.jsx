import React, { useState } from 'react';
import { useCleareCartMutation, useGetCartQuery } from '../../../futures/services/userApi';
import cartvisa from '../../../shared/cartvisa.png';

const Checkout = () => {
    const { data, refetch } = useGetCartQuery();
    const [paymentMethod, setPaymentMethod] = useState('bank');
    let [cleareCart] = useCleareCartMutation()
    const { refetch: refetchCart } = useGetCartQuery()
    const handlePaymentChange = (method) => {
        setPaymentMethod(method);
    };

    return (
        <div className="w-[90%] m-auto py-10">
            <p className="text-gray-500 text-sm mb-6">
                Product / <span>View Cart / </span>
                <span className="text-black font-medium">CheckOut</span>
            </p>

            <div className="mb-8">
                <p className="text-[32px] sm:text-[40px] font-bold text-gray-800">Billing Details</p>
            </div>

            <div className="flex justify-between">
                <form className="w-[500px] bg-white p-6 md:p-8 shadow-lg rounded-lg space-y-6">
                    <div className="space-y-4">
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md px-4 py-2"
                            placeholder="First name"
                        />
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md px-4 py-2"
                            placeholder="Last name"
                        />
                    </div>

                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md px-4 py-2"
                        placeholder="Street address"
                    />
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md px-4 py-2"
                        placeholder="Apartment, floor, etc. (optional)"
                    />
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md px-4 py-2"
                        placeholder="Town/City"
                    />

                    <div className="space-y-4">
                        <input
                            type="tel"
                            className="w-full border border-gray-300 rounded-md px-4 py-2"
                            placeholder="Phone number"
                        />
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded-md px-4 py-2"
                            placeholder="Email address"
                        />
                    </div>

                    <div className="flex items-start gap-2 pt-2">
                        <input type="checkbox" id="save" className="mt-1 h-4 w-4 text-red-500" />
                        <label htmlFor="save" className="text-gray-700">
                            Save this information for faster check-out next time.
                        </label>
                    </div>
                </form>

                <div>
                    {data?.data[0]?.productsInCart?.map((e) => (
                        <div key={e.id} className="flex items-center justify-between w-[500px] mb-4">
                            <div className="flex items-center gap-[20px]">
                                <img
                                    className="w-[100px]"
                                    src={`https://store-api.softclub.tj/images/${e.product.image}`}
                                    alt={e.product.productName}
                                />
                                <p>{e.product.productName}</p>
                            </div>
                            <p>${e.product.price}</p>
                        </div>
                    ))}

                    <div className="flex justify-between mt-[20px]">
                        <p>Subtotal:</p>
                        <p>${data?.data[0].totalPrice}</p>
                    </div>
                    <div className="flex justify-between mt-[20px]">
                        <p>Shipping:</p>
                        <p>Free</p>
                    </div>
                    <hr className="mt-[20px]" />
                    <div className="flex justify-between items-center mt-[20px]">
                        <p className="font-semibold text-[30px]">Total:</p>
                        <p className="text-[30px] font-semibold">${data?.data[0].totalPrice}</p>
                    </div>

                    <div className="flex items-center justify-between mt-[20px]">
                        <div className="flex gap-[10px] items-center">
                            <input
                                type="radio"
                                name="payment"
                                value="bank"
                                checked={paymentMethod === 'bank'}
                                onChange={() => handlePaymentChange('bank')}
                                className="w-[20px] h-[20px]"
                            />
                            <p className="text-[20px] font-medium">Bank</p>
                        </div>
                        <img src={cartvisa} alt="visa" />
                    </div>

                    <div className="flex gap-[10px] mt-[20px] items-center">
                        <input
                            type="radio"
                            name="payment"
                            value="cash"
                            checked={paymentMethod === 'cash'}
                            onChange={() => handlePaymentChange('cash')}
                            className="w-[20px] h-[20px]"
                        />
                        <p className="text-[20px] font-medium">Cash on delivery</p>
                    </div>
                    <div className='flex justify-between mt-[20px]'>
                        <input className='border border-gray-500 p-[10px] rounded-md' type="text" placeholder='Coupon Code' />
                        <button className='border border-[#DB4444] p-[10px] px-[40px] rounded-md text-[#DB4444] cursor-pointer hover:bg-red-500 hover:text-[white]' >Apply</button>
                    </div>
                    <button onClick={() => {cleareCart(),refetchCart(), alert('You buy this product')}} className='border border-[#DB4444] bg-[#DB4444] p-[10px] px-[40px] rounded-md text-[white] cursor-pointer mt-[20px]'>Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
