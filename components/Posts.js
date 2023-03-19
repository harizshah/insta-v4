import React from 'react'
import Post from "./Post";

function Posts() {
    const posts =[
        {
        id: "1",
        username: "codewithsahand",
        userImg: "https://media.licdn.com/dms/image/C5603AQHnJdpn5M-X7w/profile-displayphoto-shrink_200_200/0/1625374860034?e=1684368000&v=beta&t=D2GpjrDqN8G_UcBtUJN__bsSKNiC-wpxLK4Z9CoJQyM",
        img: "https://images.unsplash.com/photo-1679068476679-5057c5c5d256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        caption: "Thanks for the picture"
        },
        {
        id: "2",
        username: "harizshah",
        userImg: "https://media.licdn.com/dms/image/C5603AQHnJdpn5M-X7w/profile-displayphoto-shrink_200_200/0/1625374860034?e=1684368000&v=beta&t=D2GpjrDqN8G_UcBtUJN__bsSKNiC-wpxLK4Z9CoJQyM",
        img: "https://images.unsplash.com/photo-1679068463336-bb196f54d2c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        caption: "Nice picture"
        }]
  return (
    <div>
        {posts.map(post =>
            <Post
            key={post.id}
            id={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}
             />
        )}
    </div>
  )
}

export default Posts