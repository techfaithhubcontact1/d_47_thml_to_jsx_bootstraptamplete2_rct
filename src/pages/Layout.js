import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Aside from '../components/Aside'

export default function Layout() {
     return (
          <>
               <Header />
               <main>
                    <Aside />
                    <Outlet />
               </main>
               <Footer />
          </>
     )
}
