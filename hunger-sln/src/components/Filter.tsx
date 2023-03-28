import React from 'react'

export default function Filters({ filterList }: any) {
    return (
        <div className='p-8 flex flex-wrap'>
            {filterList.map((filter: any) => (
                <div key={filter.id} className="flex items-center p-4
             rounded-md text-md m-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 cursor-pointer 
              justify-center w-1/8 h-5 border border-gray-300">
                    <span className="mr-2 items-center">
                        {filter.icon}
                    </span>
                    <span className="text-sm font-medium">{filter.title}</span>
                </div>
            ))}

        </div>
    )
}
