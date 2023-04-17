import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

function Layout({ children }) {
    return (
        <>
            <main className=" bg-black min-h-screen">
            <NavBar />
            <div className="pt-24">
                {children}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Layout