import React from 'react'
import Image from "next/image";
import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

function Header() {
  return (
        <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
            {/* Left */}
            <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
                <Image 
                src="http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
                layout="fill"
                className="object-contain"
                />
            </div>
            <div className="cursor-pointer h-24 w-10 relative  lg:hidden">
                <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png"
                layout="fill"
                className="object-contain"
                />
            </div>
            {/* Middle */}
            <div className="relative mt-1">
                <div className="absolute top-2 left-2">
                <SearchIcon className="h-5 text-gray-500" />
                </div>
                <input 
                type="text"
                placeholder="Search"
                className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
                />
            </div>

            {/* Middle */}

            <div className="flex space-x-4 items-center">
                <HomeIcon 
                className="hidden md:inline-flex  h-6 cursor-pointer hover:scale-125 transition-tranform duration-200 ease-out"
                />
                <PlusCircleIcon 
                className="h-6 cursor-pointer hover:scale-125 transition-tranform duration-200 ease-out"
                />
                <img 
                src="https://media.licdn.com/dms/image/C5603AQHnJdpn5M-X7w/profile-displayphoto-shrink_200_200/0/1625374860034?e=1684368000&v=beta&t=D2GpjrDqN8G_UcBtUJN__bsSKNiC-wpxLK4Z9CoJQyM"
                alt="user-image"
                className="h-10 rounded-full cursor-pointer" 
                />
            </div>
        </div>
  )
}

export default Header