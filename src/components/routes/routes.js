import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
function Home(){
    return(
        <>
        <Header/>
        <main>
            {
                <Outlet />
            }
        </main>
        <Footer/>
        </>
    )
}
export default Home;