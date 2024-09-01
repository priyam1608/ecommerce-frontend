import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/homepage/Homepage'
import ProductGridPage from '../pages/productGridPage/ProductGridPage'
import Footer from '../components/footer/Footer'
import Navigation from '../components/navigation/Navigation'
import ProductPage from '../pages/productPage/ProductPage'
import CartPage from '../pages/cartPage/CartPage'
import MyOrdersPage from '../pages/myOrdersPage/MyOrdersPage'
import AddressPage from '../pages/addressPage/AddressPage'
import OrderDetailsPage from '../pages/myOrdersPage/OrderDetailsPage'
import PaymentSuccessPage from '../pages/paymentPage/PaymentSuccessPage'

const CustomerRoutes = () => {
  return (
    <div>
      <Navigation/>
      <div>

        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/login' element={<Homepage/>}/>
          <Route path='/register' element={<Homepage/>}/>
          <Route path='/:levelOne/:levelTwo/:levelThree' element={<ProductGridPage/>}/>
          <Route path='/product/:productId' element={<ProductPage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/cart/checkout' element={<AddressPage/>}/>
          <Route path='/account/orders' element={<MyOrdersPage/>} />
          <Route path='/account/orders/:orderId' element={<OrderDetailsPage/>} />
          <Route path='/payments/:orderId' element={<PaymentSuccessPage/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default CustomerRoutes