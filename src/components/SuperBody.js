import React from 'react'

import Projects from './Projects'
import Blogs from './Blogs'


const SuperBody = () => {
    return (
        <div className="static p-8 lg:max-w-536 lg:max-w-736 lg:absolute lg:right-0 lg:py-20 lg:pr-20 md:pl-0">
            <Projects />
        </div>
    )
}

export default SuperBody
