import React from 'react'
import { categories } from '../../helper/data'

const Categories = ({handleClick}) => {
    console.log(categories);
  return (
    <div className='title'>
        {categories.map((item)=>(
            <div key={item} className='btn-item'>
                <button onClick={(e)=>handleClick(e.target.innerText)} >{item} </button>
            </div>
        ))}
    </div>
  )
}

export default Categories