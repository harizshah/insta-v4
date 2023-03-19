import React from 'react'

function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
      className="h-16 rounded-full border p-[2px]"
      src="https://media.licdn.com/dms/image/C5603AQHnJdpn5M-X7w/profile-displayphoto-shrink_200_200/0/1625374860034?e=1684368000&v=beta&t=D2GpjrDqN8G_UcBtUJN__bsSKNiC-wpxLK4Z9CoJQyM" 
      alt="user-image" />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">Hariz.shah</h2>
        <h3 className="text-sm text-gray-400">Hi, Welcome to my page</h3>
      </div>
      <button
      className="font-semibold text-blue-400 text-sm"
      >Sign Out</button>
    </div>
  )
}

export default MiniProfile