import React from 'react'
import { dailyGreet, splGreet } from '../helpers/getgreet'

const Greetings = () => {
    return (
        <div className="h-6 m-6 flex flex-row justify-between text-blue-300">
            <p className="">{dailyGreet}</p>
            <h3 className="">{splGreet}</h3>
            <p className="mx-10 pr-8">Dubai</p>
        </div>
    )
}

export default Greetings
