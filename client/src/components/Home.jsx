import React from 'react'
import MainPage from './MainPage';
import MainNav  from "./Navs/MainNav";
import Footer from './Footers/Footer';
export default function Home() {
  return (
    <div>
      <MainNav/>
      <MainPage/>
      <Footer/>
    </div>
  )
}
