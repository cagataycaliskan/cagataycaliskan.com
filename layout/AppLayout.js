import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

function AppLayout({ children }) {
    return (
        <>
            <Header />
            <Content>
                {children}
            </Content>
            <Footer />
        </>
    )
}

export default AppLayout