import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import '.././App.css'

export default function Loyout(props) {
    return (
        <div className='loyout-container'>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}
