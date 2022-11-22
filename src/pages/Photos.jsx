import React from "react"

import Image from "../components/Image"
import {ContextConsumer} from "../Context"
import {getClass} from "../utils"

function Photos() {
    return (
        <main className="photos">
            <h1>Images go here</h1>
            <ContextConsumer>
                {context => {
                    // console.log(`Consumed Context: ${JSON.stringify(context.allPhotos)}`)
                    console.log(JSON.stringify(context.allPhotos[0]))
                    return (
                        <div></div>
                    )
                }}
            </ContextConsumer>
        </main> 
    )
}

export default Photos
