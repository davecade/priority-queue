import React from 'react'
import './Icon.styles.scss'

const Icon = ({iconClass}) => {
    return (
        <div className="icon-container">
            <i class={iconClass}></i>
        </div>
    )
}

export default Icon
