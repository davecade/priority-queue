import React from 'react'
import './navbar.styles.scss'
import SearchBar from '../SearchBar/SearchBar.component'
import { connect } from 'react-redux'
import { enableModal } from '../../Redux/modal/modal.actions'

const Navbar = ({ enableModal }) => {
    return (
        <nav className="navbar">
            <div className="left">
                <i className="fas fa-home"></i>
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

export default connect(null, mapDispatchToProps)(Navbar)