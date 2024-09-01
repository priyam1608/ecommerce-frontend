import React, { useEffect } from 'react'
import ProductDetailsCard from '../../components/productDetailsCard/ProductDetailsCard'
import RatingsAndReviewCard from '../../components/RatingsAndReviewCard/RatingsAndReviewCard'
import SimilarProductsGrid from '../../components/SimilarProductsGridComponent/SimilarProductsGrid'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductById } from '../../redux/productRedux/action'

const ProductPage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProductById(params.productId))
  },[params.productId])
  return (
    <div>
        <ProductDetailsCard />
        <RatingsAndReviewCard />
        <SimilarProductsGrid />
    </div>
  )
}

export default ProductPage