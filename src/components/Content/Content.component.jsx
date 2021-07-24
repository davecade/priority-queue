import React, { useEffect } from 'react'
import './Content.styles.scss'
import MainPage from '../../Pages/Main/Main.page'
import { connect } from 'react-redux'

const Content = ({ selectedTicket }) => {

    useEffect(() => {
        console.log("selectedTicket", selectedTicket)
        
    }, [selectedTicket])

    return (
        <div className="content-container">
            <MainPage />
        </div>
    )
}

const mapStateToProps = state => ({
    selectedTicket: state.tickets.selectedTicket
})

export default connect(mapStateToProps)(Content)
