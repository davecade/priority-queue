import React from 'react'

const Loading = ({heading}) => {

    return (
        <div className="lds-ellipsis" style={{
                visibility: heading==="Loading Tickets" ? "visible" : "hidden"
            }}><div></div><div></div><div></div><div></div></div>
    )
}

export default Loading
