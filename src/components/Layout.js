import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

function Layout({ children }) {
    return (
        <>
            <main className="min-h-screen">
            <NavBar />
            <div className="md:py-24 pt-24 pb-12 min-h-screen ">
                {children}
                </div>
            <Footer />
            </main>
        </>
    )
}

export default Layout