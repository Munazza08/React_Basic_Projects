import React from 'react'


const Card = ({ data }) => {  // Destructure 'data' from props
  console.log(data); 

   const readMore = (url) =>{
      window.open(url)
   }

  return (
    <div className='cardContainer'>
    {data && data.map((curitem,index)=>{
      if(!curitem.urlToImage){
        return null
      }else{
          return(
            <div className='card'>
              <img src={curitem.urlToImage}/>
              <div className='cardContent'>
              <a className='title' onClick={()=>window.open(curitem.url)}>{curitem.title}</a>
              <p className='description'>{curitem.description}</p>
              <button onClick={()=>window.open(curitem.url)}>Read More</button>
              </div>
            </div>
      )
      }

    })}

    </div>
  )
}

export default Card