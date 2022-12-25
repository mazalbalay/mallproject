import React from 'react'
import MainPage from './MainPage';
import MainNav  from "./Navs/MainNav";
import Footer from './Footers/MainPageFooter'
import AboutPage from './AboutPage/AboutPage';
import ProductsScreen from './Manager/ProductsScreen';
import MainPageFooter from './Footers/MainPageFooter';
import Orders from './Orders/Orders';
export default function Home() {
  return (
    <div>
      <MainNav/>
      <MainPage/>
      <Footer/>
      <Orders/>
    </div>
  )
}
