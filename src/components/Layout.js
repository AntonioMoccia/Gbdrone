import React from 'react'
import NavBar from './NavBar'

function Layout({ children }) {
    return (
        <>
            <main className=" bg-black min-h-screen">
            <NavBar />
            <div className="pt-24">
                {children}
                </div>
            </main>
        </>
    )
}

export default Layout