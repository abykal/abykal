import React from 'react'
import { dailyGreet, splGreet } from '../helpers/getgreet'

const Greetings = () => {
    return (
        <div className="h-6 m-6 lg:pl-20 flex flex-row justify-between text-blue-300">
            <h3 className="">{splGreet()}</h3>
            <p className="mx-10 pr-8">{dailyGreet()}, Dubai</p>
        </div>
    )
}

export default Greetings
