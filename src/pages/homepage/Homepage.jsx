import React from 'react'
import MainCorousal from '../../components/mainCorousal/MainCorousal'
import ProductCorousal from '../../components/productCorousal/ProductCorousal'
import { mensShoes } from '../../data/shoes'
import  men_shirt from '../../data/Men/men_shirt.json'
import { sareePage1 } from '../../data/Saree/page1'
import  women_dress  from '../../data/Women/women_dress.json'
import { mens_kurta } from '../../data/Men/men_kurta'

const Homepage = () => {
  return (
    <div>
        <MainCorousal/>
        <div className='space-y-14 mt-10 overflow-hidden'>
            <ProductCorousal categoryItems={mens_kurta} category={"Men's Kurta"}/>
            <ProductCorousal categoryItems={mensShoes} category={"Men's Shoes"}/>
            <ProductCorousal categoryItems={men_shirt} category={"Men's Shirt"}/>
            <ProductCorousal categoryItems={sareePage1} category={"Women's Saree"}/>
            <ProductCorousal categoryItems={women_dress} category={"Women's Dress"}/>
        </div>
    </div>
  )
}

export default Homepage