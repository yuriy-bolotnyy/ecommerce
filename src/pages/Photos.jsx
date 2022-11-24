import React, {useContext} from "react"
import {Context} from "../Context"

import Image from "../components/Image"
import {getClass} from "../utils"

function Photos() {
    const {allPhotos} = useContext(Context)
    console.log(`Context consumed: ${JSON.stringify(allPhotos)}`)

    return (
        <main className="photos">
            <h1>Images go here</h1>

            {allPhotos.map((img, i) => (
                <Image key={img.id} img={img} className={getClass(i)}/>
            ))}
        </main> 
    )
}

export default Photos
