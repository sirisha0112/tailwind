import React from 'react'
import { AiFillCheckCircle } from "react-icons/ai"
import { BiSolidLockAlt } from "react-icons/bi"

function KycPage() {
  return (

    <div className="mx-auto">
      <div className="md:flex mt-4">
      <div class="md:w-1/4">
        <div className="p-2">
          <div className="w-full">
            <div class="line bg-gray-200 w-full sm:w-full rounded-lg">
              <div><AiFillCheckCircle class='mt-3 mr-6 ml-4 text-gray-400 text-2xl' /></div>
              <div class="mb-1 pt-3 pb-1 font-sans font-bold text-base ">Personal information</div>
            </div>
            <div class="line w-full sm:w-72">
              <div><BiSolidLockAlt class='mt-4 mr-6 ml-4 text-gray-400 text-2xl' /></div>
              <div class="mb-1 pt-4 pb-1 font-sans font-semibold text-base text-gray-400 ">Identification</div>
            </div>
            <div class="line w-full sm:w-72">
              <div><BiSolidLockAlt class='mt-4 mr-6 ml-4 text-gray-400 text-2xl' /></div>
              <div class="mb-1 pt-4 pb-1 font-sans font-semibold text-base text-gray-400 ">Address Information</div>
            </div>
            <div class="line w-full sm:w-72">
              <div><BiSolidLockAlt class='mt-4 mr-6 ml-4 text-gray-400 text-2xl' /></div>
              <div class="mb-1 pt-4 pb-1 font-sans font-semibold text-base text-gray-400">Financial Information</div>
            </div>
          </div>
        </div>
        </div>

        <div class="md:w-3/4">  
          <div>
          <div class="max-w-full mx-auto pt-2">
            <h3 class="text-2xl font-medium text-black-700 ml-8">Personal information</h3>
            <p className='paragraph'>
              Basic information for an account opening
            </p>

            <form class="bg-white rounded px-8 pt-6 pb-8 mb-4 ">
              <div class="flex flex-wrap -mx-4 mb-4">

                <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 px-4 mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="firstName">First Name</label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstName" type="text" name="firstname" placeholder="First name" required />
                </div>

                <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 px-4 mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="lastName">Last Name</label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastName" type="text" name="lastname" placeholder="Last name" required />
                </div>

                <div class="w-full px-4 mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="firstName">Email</label>
                  <input class="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name="email" placeholder="Email" required />
                </div>

                <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 px-4 mb-4">
                  <label for="gender" class="block text-gray-700 text-sm font-bold mb-2">Gender</label>
                  <select id="gender" name="gender" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow font-light text-gray-400 focus:ring focus:ring-indigo-400 focus:ring-opacity-50">
                    <option value="" disabled selected class="bg-gray-200 cursor-not-allowed">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 px-4 mb-4">
                  <label for="maritalStatus" class="block text-gray-700 text-sm font-bold mb-2">Marital Status</label>
                  <select id="maritalStatus" name="maritalStatus" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow focus:ring focus:ring-indigo-400 focus:ring-opacity-50 font-light text-gray-400">
                    <option value="" disabled selected>Marital Status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                    <option value="separated">Separated</option>
                  </select>
                </div>

                <div class="w-full px-4 mb-4">
                  <label for="nationality" class="block text-gray-700 text-sm font-bold mb-2">Nationality</label>
                  <select id="nationality" name="nationality" class="mt-1 block font-light text-gray-400 w-full p-2 border border-gray-300 rounded-md shadow focus:ring focus:ring-indigo-400 focus:ring-opacity-50">
                    <option value="" disabled selected>Nationality</option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="uk">United Kingdom</option>
                    <option value="fr">France</option>
                  </select>
                </div>

                <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 px-4 mb-4">
                  <label for="phone" class="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                  <div class="relative rounded-md shadow flex items-center border w-full">
                    <select id="dialCode" name="dialCode" class="py-2 px-3 leading-tight focus:outline-none font-light text-gray-400">
                      <option value="" disabled selected>Dial code</option>
                      <option value="1">+1 (United States)</option>
                      <option value="44">+44 (United Kingdom)</option>
                      <option value="49">+49 (Germany)</option>
                    </select>
                    <div class="h-full border-l border-gray-300">
                      <input id="phoneNumber" type="text" name="phoneNumber" placeholder="Phone Number" class="py-2 pl-3 pr-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                    </div>
                  </div>
                </div>

                <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 px-4 mb-4">
                  <label for="dob" class="block text-gray-700 text-sm font-bold mb-2">Date of Birth</label>
                  <div class="relative rounded-md">
                    <input id="dob" type="date" name="dob" class="py-2 pl-3 pr-10 shadow border rounded w-full text-gray-400 leading-tight focus:outline-none focus:shadow-outline" required />
                    <span class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      </svg>
                    </span>
                  </div>
                </div>

                <div class="relative flex items-center ml-auto">
                  <button type="button"
                    class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <a href="#" class="bg-blue-700 text-white block rounded-md px-3 py-2 text-base font-medium button"
                      aria-current="page">Next</a>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default KycPage;