import React from 'react'
import all_products from "../Assets/products"


const Popular = () => {
  return (
    <div className='popular'>
        <h1>Popular</h1>
        <hr />
        <div className="popular-items">
            {all_products.map((item, i)=>{
                return <item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
            })}
        </div>
        
    </div>
  )
}

export default Popular