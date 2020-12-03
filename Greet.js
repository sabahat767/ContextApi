import React from 'react'

function Greet({name,greetMsg}) {
    return (
        <div>
            <p>{`${greetMsg} ${name}`}</p>
        </div>
    )
}

export default Greet
