// import React from 'react'
// // import { PiCaretUpDownFill } from "react-icons/pi";
// import { AiOutlineSearch } from "react-icons/ai";

// function ProductsList() {
//     return (
//         <div>
//             <h1>Products</h1>
//             {/* <PiCaretUpDownFill /> */}
//             <div class="relative text-gray-600 focus-within:text-gray-400">
//                 <input
//                     type="text"
//                     class="py-2 pr-10 pl-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:ring-indigo-500 focus:border-indigo-500"
//                     placeholder="Search"
//                 />
//                 <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                     <AiOutlineSearch />
//                 </div>
//             </div>


//         </div>
//     )
// }

// export default ProductsList


import React from "react";
import { FaUsers } from "react-icons/fa";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineFilter } from "react-icons/hi";
import { HiDownload } from "react-icons/hi";
import { IoIosAddCircleOutline } from "react-icons/io"

const ProductsList = () => {
    return (
        <div>
            {/* <div className="cardData">
                <div> */}

            {/* <div class="flex justify-between bg-pink-200">
                        <h1 class="text-2xl font-semibold">Products</h1>

                        <div class="flex space-x-4 ">
                            <div class="relative w-64">
                                <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </span>
                                <input type="text" class="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:shadow-outline" placeholder="Search product" />
                            </div>

                            <div class="relative w-64 ">
                                <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                                    <HiOutlineFilter />
                                </span>
                                <input type="text" class="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:shadow-outline" placeholder="Filter" />
                            </div>

                            <div class="relative w-64">
                                <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                                    <HiDownload />
                                </span>
                                <input type="text" class="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:shadow-outline" placeholder="Export" />
                            </div>

                            <div class="relative flex items-center ml-auto">
                                <button type="button"
                                    class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    id="user-menu-button" aria-expanded="false" aria-haspopup="true">
            
                                    <a href="#" class="bg-blue-700 text-white block rounded-md px-3 py-2 text-base font-medium button"
                                        aria-current="page">Add Product</a>
                                </button>
                            </div>

                        </div>
                    </div> */}

            <div class="flex justify-between items-center bg-pink-200">
                <h1 class="text-2xl font-semibold pl-10">Products</h1>

                <div class="flex space-x-4 flex-wrap pt-8 items-center ">
                    <div class="relative w-full sm:w-64 md:w-64 lg:w-64 xl:w-64 mb-4 sm:mb-0 ">
                        <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </span>
                        <input type="text" class="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:shadow-outline" placeholder="Search product" />
                    </div>

                    <div class="relative w-full sm:w-64 md:w-64 lg:w-64 xl:w-64 mb-4 sm:mb-0">
                        <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                            <HiOutlineFilter />
                        </span>
                        <input type="text" class="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:shadow-outline" placeholder="Filter" />
                    </div>

                    <div class="relative w-full sm:w-64 md:w-64 lg:w-64 xl:w-64 mb-4 sm:mb-0">
                        <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                            <HiDownload />
                        </span>
                        <input type="text" class="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:shadow-outline" placeholder="Export" />
                    </div>

                    <div class="relative mb-4">
                        <button type="button"
                            class=" rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            id="user-menu-button" aria-expanded="false" aria-haspopup="true">

                            <a href="#" class="bg-blue-700 text-white block rounded-md px-3 py-2 text-base font-medium button"
                                aria-current="page">Add Product</a>
                        </button>
                    </div>
                </div>
            </div>

            {/* <div class="bg-pink-200 p-4 flex justify-between items-center">
                <h1 class="text-2xl font-semibold mb-4 pl-4">Products</h1>

                <div class="relative w-full sm:w-64 md:w-64 lg:w-64 xl:w-64 mb-4 sm:mb-0 ">
                    <div class="relative mb-4">
                        <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </span>
                        <input type="text" class="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:shadow-outline" placeholder="Search product" />
                    </div>

                    <div class="relative w-full sm:w-64 md:w-64 lg:w-64 xl:w-64 mb-4 sm:mb-0">
                        <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                            <HiOutlineFilter />
                        </span>
                        <input type="text" class="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:shadow-outline" placeholder="Filter" />
                    </div>

                    <div class="relative w-full sm:w-64 md:w-64 lg:w-64 xl:w-64 mb-4 sm:mb-0">
                        <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                            <HiDownload />
                        </span>
                        <input type="text" class="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:shadow-outline" placeholder="Export" />
                    </div>

                    <div class=" relative mb-4">
                        <button type="button"
                            class="rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                            <a href="#" class="bg-blue-700 text-white block rounded-md px-3 py-2 text-base font-medium button"
                                aria-current="page">Add Product</a>
                        </button>
                    </div>
                </div>
            </div> */}


            {/* <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                        <div class="bg-white shadow-md rounded-lg p-6 card m-3">
                            <div className="cardData gap-5">
                                <FaUsers size={40} className="icon1" />
                                <div>
                                    <p>Total Customers</p>
                                    <h5>1234</h5>
                                </div>
                                <div className="percentege1">↑ 22.34%</div>
                            </div>
                        </div>
                        <div class="bg-white shadow-md rounded-lg p-6 card m-3">
                            <div className="cardData gap-5">
                                <FaUsers size={40} className="icon2" />
                                <div>
                                    <p>Total Customers</p>
                                    <h5>1234</h5>
                                </div>
                                <div className="percentege1">
                                    <p>↑ 23.24%</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white shadow-md rounded-lg p-6 card m-3 subcard">
                            <div className="cardData gap-5">
                                <FaUsers size={40} className="icon3" />
                                <div>
                                    <p>Total Customers</p>
                                    <h5>1234</h5>
                                </div>
                                <div className="percentege2">
                                    <p>↓ 23.24%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <table class="min-w-full divide-y divide-gray-200 m-4">
                            <thead>
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b-2">
                                        Name
                                    </th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b-2">
                                        Email
                                    </th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b-2">
                                        Status
                                    </th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b-2">
                                        Last Online
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap border-b-2">
                                        <div className="rowdata">
                                            <FaUserCircle className="icon" size={24} />
                                            <span>Carolyn Perkins</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap border-b-2">
                                        carolyn_h@hotmail.com
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap border-b-2">
                                        <li style={{ color: "red" }}>
                                            <span style={{ color: "black" }}>Blocked</span>
                                        </li>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap border-b-2">
                                        carolyn_h@hotmail.com
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap border-b-2">
                                        <div className="rowdata">
                                            <FaUserCircle className="icon" size={24} />
                                            <span>Carolyn Perkins</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap border-b-2">
                                        carolyn_h@hotmail.com
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap border-b-2">
                                        <li style={{ color: "green" }}>
                                            <span style={{ color: "black" }}>Active</span>
                                        </li>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap border-b-2">
                                        carolyn_h@hotmail.com
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap border-b-2">
                                        <div className="rowdata">
                                            <FaUserCircle className="icon" size={24} />
                                            <span>Carolyn Perkins</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap border-b-2">
                                        carolyn_h@hotmail.com
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap border-b-2">
                                        <li style={{ color: "green" }}>
                                            <span style={{ color: "black" }}>Active</span>
                                        </li>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap border-b-2">
                                        carolyn_h@hotmail.com
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap border-b-2">
                                        <div className="rowdata">
                                            <FaUserCircle className="icon" size={24} />
                                            <span>Carolyn Perkins</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap border-b-2">
                                        carolyn_h@hotmail.com
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap border-b-2">
                                        <li style={{ color: "red" }}>
                                            <span style={{ color: "black" }}>Blocked</span>
                                        </li>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap border-b-2">
                                        carolyn_h@hotmail.com
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap border-b-2">
                                        <div className="rowdata">
                                            <FaUserCircle className="icon" size={24} />
                                            <span>Carolyn Perkins</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap border-b-2">
                                        carolyn_h@hotmail.com
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap border-b-2">
                                        <li style={{ color: "red" }}>
                                            <span style={{ color: "black" }}>Blocked</span>
                                        </li>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap border-b-2">
                                        carolyn_h@hotmail.com
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap border-b-2">
                                        <div className="rowdata">
                                            <FaUserCircle className="icon" size={24} />
                                            <span>Carolyn Perkins</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap border-b-2">
                                        carolyn_h@hotmail.com
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap border-b-2">
                                        <li style={{ color: "green" }}>
                                            <span style={{ color: "black" }}>Active</span>
                                        </li>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap border-b-2">
                                        carolyn_h@hotmail.com
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap border-b-2">
                                        <div className="rowdata">
                                            <FaUserCircle className="icon" size={24} />
                                            <span>Carolyn Perkins</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap border-b-2">
                                        carolyn_h@hotmail.com
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap border-b-2">
                                        <li style={{ color: "green" }}>
                                            <span style={{ color: "black" }}>Active</span>
                                        </li>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap border-b-2">
                                        carolyn_h@hotmail.com
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div> */}
        </div>
        //     </div>
        // </div>
    );
};

export default ProductsList;
