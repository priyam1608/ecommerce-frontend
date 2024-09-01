import React from 'react'
import { mens_kurta } from '../../data/Men/men_kurta'
import ProductCard from '../productGrid/ProductCard'

const SimilarProductsGrid = () => {
  return (
    <div>
        <h1 className='text-2xl font-semibold pl-5 pt-5'>Similar Products Listing</h1>
        <div className='flex flex-wrap justify-center mt-4 space-y-5'>
            {mens_kurta.map((item)=><ProductCard item={item}/>)}
        </div>
    </div>
  )
}

export default SimilarProductsGrid