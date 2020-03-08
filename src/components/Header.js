import React from 'react'

import Contacts from './Contacts'
import Footer from './Footer'

const Header = () => {
    return (
      <div className="static flex flex-col justify-between w-full p-8 lg:max-w-408 lg:max-w-496 lg:fixed lg:h-screen lg:py-88 lg:pl-88 lg:pr-0">
        <div className="flex flex-col">
          
          <h1 className="font-head text-5xl font-bold leading-tight lg:text-6xl lg:leading-none">
            Hello, I'm <span className="block">Aby Abraham</span>
          </h1>
          <p className="text-gray-500 leading-loose mt-8">
            I’m an IT Administrator currently managing IT and software
            operations of Sarsan Group of companies at Dubai. I have experience
            as Senior Software Engineer in Aerospace domain and has lead
            development and verification activities of various military and
            commercial aircraft projects. I develop and maintain company
            websites and experiment on React, Node, AWS, Dockers and Kubernetes.
            I can't shut up about test-driven development and utility-first CSS.
            I started sharing what I learn on{" "}
            <a href="blog.abykal.me">my blog</a>.
          </p>
          <Contacts />
          <Footer />
        </div>
      </div>
    );
}

export default Header
