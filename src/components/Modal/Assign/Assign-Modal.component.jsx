import React, { Fragment, useState, useEffect } from 'react'
import './Assign-Modal.styles.scss'
import { connect } from 'react-redux'
import { disableAssignModal } from '../../../Redux/modal/modal.actions'
import { updateTicket } from '../../../Redux/tickets/ticket.actions'

const AssignModal = ({ assignModalEnabled, disableAssignModal, assignModalTicket, updateTicket, userList}) => {
    //-- Modal State
    const [ visibility, setVisibility ] = useState("hidden")
    const [ opacity, setOpacity ] = useState("0")
    const [ top, setTop ] = useState("4%")

    //--Current Input Values
    const [ tech, setTech ] = useState('Unassigned')

    useEffect(() => {
        if(assignModalEnabled) {
            setVisibility("visible")
            setOpacity('1')
            setTop('8.5%')
        } else {
            setVisibility("hidden")
            setOpacity('0')
            setTop('4%')
        }
    }, [assignModalEnabled])

    useEffect(() => {
        if(assignModalTicket) {
            const { assigned } = assignModalTicket
            setTech(assigned)
        }
    }, [assignModalTicket])

    const handleTechChange = event => {
        setTech(event.target.value)
    }

    const handleSubmit = () => {
        const currentDate = new Date()
        
        const newTicket = {
            ...assignModalTicket,
            date: currentDate,
            assigned: tech,
            status: tech==="Unassigned" ? 'new' : 'in progress'
        }

        updateTicket(newTicket)
        disableAssignModal()
    }


    return (
        <Fragment>
            <div className="modal-background" style={{
                visibility: visibility,
                opacity: opacity,
            }}>
                <div className="assign-modal" style={{
                    visibility: visibility,
                    opacity: opacity,
                    top: top
                }}>
                    <div className="modal-content">
                        <h1 className="modal-title">Select Technician</h1>

                        <div className="input-fields">

                            <div className="label1">
                                <label htmlFor="">Technician</label>
                            </div>
   
                            <div className="tech">
                                <select onChange={handleTechChange} value={tech}>
                                    <option value="Unassigned">Unassigned</option>
                                    {
                                        userList.map((user, index) => (
                                            <option key={index} value={user}>{user}</option>
                                        ))
                                    }
                                </select>
                            </div>

                        </div>

                        <div className="buttons">
                            <div className="submit-button">
                                <button className="btn" onClick={handleSubmit}>Submit</button>
                            </div>
                            <div className="cancel-button">
                                <button className="btn" onClick={()=>disableAssignModal()}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    assignModalEnabled: state.modal.assignModalEnabled,
    assignModalTicket: state.modal.assignModalTicket,
    userList: state.users.userList
})

const mapDispatchToProps = dispatch => ({
    disableAssignModal: () => dispatch(disableAssignModal()),
    updateTicket: ticket => dispatch(updateTicket(ticket))
})

export default connect(mapStateToProps, mapDispatchToProps)(AssignModal)
