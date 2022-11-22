import React from "react"

import Image from "../components/Image"
import {ContextConsumer} from "../Context"
import {getClass} from "../utils"

function Photos() {
    return (
        <main className="photos">
            <h1>Images go here</h1>
            <ContextConsumer>
                {allPhotos => {
                    console.table(`Consumed Context: ${JSON.stringify(allPhotos)}`)
                    return (
                        <div></div>
                    )
                }}
            </ContextConsumer>
        </main> 
    )
}

export default Photos
