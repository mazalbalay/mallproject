import React from 'react'
import MainPage from './MainPage';
import MainNav  from "./Navs/MainNav";
import Footer from './Footers/MainPageFooter'
import CheckOut from './checkout/CheckOut';
export default function Home() {
  return (
    <div>
      <MainNav/>
      <MainPage/>
      <CheckOut/>
      <Footer/>
    </div>
  )
}
