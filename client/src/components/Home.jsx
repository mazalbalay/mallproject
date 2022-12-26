import React from 'react'
import MainPage from './MainPage';
import MainNav  from "./Navs/MainNav";
import Footer from './Footers/MainPageFooter'
import StoreComp from './Stores/StoreComp';
export default function Home() {
  return (
    <div>
      <StoreComp/>
      {/* <MainNav/>
      <MainPage/>
      <Footer/> */}
    </div>
  )
}
