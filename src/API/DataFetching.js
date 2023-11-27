import React, { useEffect, useState } from 'react'

const DataFetching = () => {

    const [posts, setPosts]= useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => setPosts(posts.splice(0,10)))   
    }, [])

  return (
    <div>
        <h1>Fetch Data</h1>
  
        {posts.map((post)=>
        <div  key={posts.id}> 
        <h1>{post.title}</h1>
        <p>{post.body}</p>
</div> 
        )}
    </div>
  )
}

export default DataFetching