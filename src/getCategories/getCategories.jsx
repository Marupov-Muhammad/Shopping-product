import React, { useState } from 'react'
import { useSubCategoriesQuery } from '../futures/services/userApi'

const GetCategories = () => {
    const { data, isLoading } = useSubCategoriesQuery()
    const [activeId, setActiveId] = useState(null)

    if (isLoading) return <p>Loading...</p>

    return (
        <div className="w-full flex flex-wrap gap-4 justify-center mt-8">
            {data?.data?.map((e) => (
                <div
                    key={e.id}
                    onClick={() => setActiveId(e.id)}
                    className={`w-[220px] h-[140px] flex flex-col items-center justify-center cursor-pointer rounded-md border
            transition-all duration-300 ease-in-out transform
            ${activeId === e.id
                            ? 'bg-[#DB4444] text-white border-transparent scale-105 shadow-md'
                            : 'bg-white text-black border-gray-300 hover:border-black hover:shadow hover:scale-105'}`}>
                    <img
                        className={`w-10 h-10 mb-2 }`}
                        src={`https://store-api.softclub.tj/images/${e.categoryImage}`}
                        alt={e.categoryName}
                    />
                    <p className="font-medium text-sm text-center">{e.categoryName}</p>
                </div>
            ))}
        </div>
    )
}

export default GetCategories
