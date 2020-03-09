import React from 'react'
import { DAILYGRT, SPLGRT } from '../helpers/getgreet'

const Greetings = () => {
    return (
        <div className="h-2 m-6 flex flex-row justify-between text-blue-300">
            <p className="">{DAILYGRT}</p>
            <h3 className="">{SPLGRT}</h3>
            <p className="mx-10 pr-8">Dubai</p>
        </div>
    )
}

export default Greetings
