import React, { Component } from 'react'
import './error-boundary.styles.scss'

class ErrorBoundary extends Component {

    constructor() {
        super()

        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error) {
        console.log(error)
        return { hasErrored: true }
    }

    componentDidCatch(error, info) {
        console.log("error", error)
        console.log("info", info)
    }

    render() {
        if(this.state.hasErrored) {
            return (
                <div className="error-image-overlay">
                    <div className="error-image-container"></div>
                    <h1 className="error-image-text">Sorry there is a leak on this page</h1>
                </div>
            )
        }

        return this.props.children
    }

}

export default ErrorBoundary;
