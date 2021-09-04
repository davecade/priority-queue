import React from 'react'
import './navbar.styles.scss'
import SearchBar from '../SearchBar/SearchBar.component'
import { connect } from 'react-redux'
import { enableCreateModal } from '../../Redux/modal/modal.actions'
import { withRouter } from 'react-router-dom'

//--changhed navbar
const Navbar = ({ enableCreateModal, history }) => {
    return (
        <nav className="navbar">
            <div className="left">
                <i className="fas fa-home" onClick={() => history.push('/')}></i>
                <SearchBar />
            </div>
            <div className="right">
                <button className="btn" onClick={() => enableCreateModal()}>Create +</button>
            </div>
        </nav>
    )
}

const mapDispatchToProps = dispatch => ({
    enableCreateModal: () => dispatch(enableCreateModal())
})

export default connect(null, mapDispatchToProps)(withRouter(Navbar))