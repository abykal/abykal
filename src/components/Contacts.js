import React from 'react'

const Contacts = () => {
    return (
        <div className="flex items-center w-full mt-32 md:mt-24 text-white">
            <img className="w-10 h-10 mr-32 rounded-full" src="https://avatars2.githubusercontent.com/u/21127917?s=400&v=4"/>
            <ul className="flex -mx-16">
                <li className="mx-16">
                    <a className="flex items-center" target="_blank"><span>Twitter</span></a>
                </li>
                <li className="mx-16">
                    <a className="flex items-center" target="_blank"><span>GitHub</span></a>
                </li>
            </ul>
        </div>
    )
}

export default Contacts
