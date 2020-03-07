import React from 'react'

const Contacts = () => {
    return (
        <div className="flex items-center w-full mt-8 md:mt-10">
            <img className="w-12 h-12 mr-8 rounded-full" src="https://avatars2.githubusercontent.com/u/21127917?s=400&v=4"/>
            <ul className="flex -mx-4">
                <li className="mx-4">
                    <a href="#" className="flex items-center" target="_blank"><span>Twitter</span></a>
                </li>
                <li className="mx-4">
                    <a href="#" className="flex items-center" target="_blank"><span>LinkedIn</span></a>
                </li>
                <li className="mx-4">
                    <a href="#" className="flex items-center" target="_blank"><span>GitHub</span></a>
                </li>
            </ul>
        </div>
    )
}

export default Contacts
