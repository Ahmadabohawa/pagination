"use client";
import Image from 'next/image'
import axios from 'axios'
import { GoArrowRight } from "react-icons/go";
import { GoIssueOpened } from "react-icons/go";
import { GoSkipFill } from "react-icons/go";
import { GoCode } from "react-icons/go";

export default function Home() {
  return (
    <div className='home flex w-full bg-[#111] h-96'>

      <div className='input-container'>
        <GoSkipFill className='icon text-3xl text-white ml-96'/>
      </div>
      <div className='input-container2'>
          <GoCode className='icon2 text-3xl text-black bg-white rounded-2xl py-1 '/>
      </div>
    <div class="container h-full  py-12 text-white mt-28">
    <h1 class="text-4xl text-center font-bold ml-0 mb-6 w-96">Let's build from here</h1>
    <p class="text-center mb-12 w-96 ">Trusted by the world's leading organizations.</p>
   
    <div class="flex ml-4 mt-28">
        <div class=" relative">
            <input type="text" placeholder="Enter your email address" class="w-72 py-2 pl-12 pr-4 text-gray-700 bg-gray-200 border-0 rounded-l-md focus:ring-0 focus:outline-none focus:bg-white"/>
        <button class="bg-blue-500 rounded-r-md hover:bg-blue-700 text-white  py-2 px-4 ">
          Click to Search</button>
          <span className='text-3xl'> | </span>
          <button class="border bg-zinc-900 rounded-md hover:bg-blue-500 text-white  py-2 px-4 ">
          Start a free enterprise trial</button>
        </div>  
    </div>
    <p className='w-96 mt-36 ml-2'>Trusted by the world's leading organizations</p>

</div>
</div>
 )
}