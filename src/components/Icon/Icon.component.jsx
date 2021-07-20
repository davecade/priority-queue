import React from 'react'
import './Icon.styles.scss'

const Icon = ({iconClass, color, backgroundColor}) => {
    return (
        <div
            className="icon-container"
            style={ {
                backgroundColor: backgroundColor,
            }}
        >
            <i class={iconClass} style={ { color: color } }></i>
        </div>
    )
}

export default Icon
