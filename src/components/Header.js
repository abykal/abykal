import React from 'react'

import Contacts from './Contacts'

const Header = () => {
    return (
        <div className="flex flex-col mt-32">
            <h1 className="text-white text-4xl font-bold leading-tight lg:text-6xl lg:leading-none">Hello, I'm Aby Kal</h1>
            <p className="text-gray-500 leading-loose mt-20">I’m an IT Administrator currently managing IT and software operations of Sarsan Group of companies at Dubai. 
            I have experience as Senior Software Engineer in Aerospace domain and has lead development and verification activities of various military and commercial aircraft projects. 
            I develop and maintain company websites and experiment on React, Node, AWS, Dockers and Kubernetes. 
            I can't shut up about test-driven development and utility-first CSS. 
            I started sharing what I learn on <a href="blog.abykal.me">my blog</a>.</p>
            <Contacts />
        </div>
    )
}

export default Header
