import React from 'react'
import NavBar from './NavBar'

function Layout({ children }) {
    return (
        <>
            <main className=" bg-neutral-900 h-screen">
            <NavBar />
                {children}
            </main>
        </>
    )
}

export default Layout