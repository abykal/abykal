import React from 'react'

import Contacts from './Contacts'

const Header = () => {
    return (
        <div>
            <h1>Hello, I'm Aby Kal</h1>
            <p>I’m an IT Administrator currently managing IT and software operations of Sarsan Group of companies at Dubai. 
            I have experience as Senior Software Engineer in Aerospace domain and has lead development and verification activities of various military and commercial aircraft projects. 
            I develop and maintain company websites and experiment on React, Node, AWS, Dockers and Kubernetes. 
            I can't shut up about test-driven development and utility-first CSS. 
            I started sharing what I learn on <a href="blog.abykal.me">my blog</a>.</p>
            <Contacts />
        </div>
    )
}

export default Header
