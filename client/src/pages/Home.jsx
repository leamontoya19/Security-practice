import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  
  const posts =[
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur ad",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vitae officiis sapiente quidem nemo quae neque, aut iusto aliquam quisquam quo nam? Suscipit commodi atque debitis fuga, assumenda sint temporibus",
      img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adiuisquam quo nsumenda sint temporibus",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vitae officiis sapiente quidem nemo quae neque, aut iusto aliquam quisquam quo nam? Suscipit commodi atque debitis fuga, assumenda sint temporibus",
      img: "https://images.unsplash.com/photo-1513001900722-370f803f498d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3N8ZW58MHx8MHx8fDA%3D",

    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adaut iust, assumenda sint temporibus",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vitae officiis sapiente quidem nemo quae neque, aut iusto aliquam quisquam quo nam? Suscipit commodi atque debitis fuga, assumenda sint temporibus",
      img: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2luZW1hfGVufDB8fDB8fHww",

    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.uo nam? Suscipit commodi ",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vitae officiis sapiente quidem nemo quae neque, aut iusto aliquam quisquam quo nam? Suscipit commodi atque debitis fuga, assumenda sint temporibus",
      img: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNvbWlkYXxlbnwwfHwwfHx8MA%3D%3D",

    },
  ]


  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post=>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt=''/>
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
              <h1>{post.title}</h1>
              <p>{post.desc}</p>
              <button>Read More</button>
              </Link>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  )
}

export default Home