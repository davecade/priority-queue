import React from 'react'
import './Navbar.styles.scss'
import SearchBar from '../SearchBar/SearchBar.component'
import { connect } from 'react-redux'
import { enableModal } from '../../Redux/modal/modal.actions'
import { withRouter } from 'react-router-dom'

//--changhed navbar
const Navbar = ({ enableModal, history }) => {
    return (
        <nav className="navbar">
            <div className="left">
                <i className="fas fa-home" onClick={() => history.push('/')}></i>
                <SearchBar />
            </div>
            <div className="right">
                <button className="btn" onClick={() => enableModal()}>Create +</button>
            </div>
        </nav>
    )
}

const mapDispatchToProps = dispatch => ({
    enableModal: () => dispatch(enableModal())
})

export default connect(null, mapDispatchToProps)(withRouter(Navbar))