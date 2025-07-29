import React from 'react'
import { MdPhoneInTalk, MdEmail } from 'react-icons/md';
const Contact = () => {
  return (
    <div className="w-[90%] mx-auto py-12 mt-[100px]">
      <p className="text-gray-600 text-sm mb-8">
        Home / <span className="text-black">Contact</span>
      </p>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 flex flex-col gap-6">
          {/* Call Us */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#DB4444] text-white p-3 rounded-full">
                <MdPhoneInTalk size={24} />
              </div>
              <h2 className="font-bold text-lg">Call To Us</h2>
            </div>
            <p className="text-sm text-gray-600 mb-2">We are available 24/7, 7 days a week.</p>
            <p className="text-sm text-gray-600">Phone: +8801611112222</p>
            <hr className="my-4 border-gray-200" />
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#DB4444] text-white p-3 rounded-full">
                <MdEmail size={24} />
              </div>
              <h2 className="font-bold text-lg">Write To US</h2>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-sm text-gray-600">Emails: customer@exclusive.com</p>
            <p className="text-sm text-gray-600">Emails: support@exclusive.com</p>
          </div>
        </div>

        <div className="flex-[2] bg-white p-6 rounded-lg shadow-md">
          <form className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Name"
                className="flex-1 p-3 border border-gray-300 rounded-md text-sm outline-none focus:border-[#DB4444]"
              />
              <input
                type="email"
                placeholder="Email"
                className="flex-1 p-3 border border-gray-300 rounded-md text-sm outline-none focus:border-[#DB4444]"
              />
              <input
                type="text"
                placeholder="Phone"
                className="flex-1 p-3 border border-gray-300 rounded-md text-sm outline-none focus:border-[#DB4444]"
              />
            </div>

            <textarea
              placeholder="Your Massage"
              rows="6"
              className="p-3 border border-gray-300 rounded-md text-sm outline-none focus:border-[#DB4444]"
            ></textarea>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#DB4444] text-white px-6 py-3 rounded-md hover:bg-red-600 transition duration-200 cursor-pointer"
              >
                Send Massage
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact