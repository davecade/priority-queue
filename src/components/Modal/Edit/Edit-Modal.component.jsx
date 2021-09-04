import React, { Fragment, useState, useEffect } from 'react'
import './Edit-Modal.styles.scss'
import { connect } from 'react-redux'
import { disableEditModal } from '../../../Redux/modal/modal.actions'
import { updateTicket } from '../../../Redux/tickets/ticket.actions'
import { selectUserList } from '../../../Redux/users/user.selectors'
import { selectEditModalEnabled, selectEditModalTicket } from '../../../Redux/modal/modal.selectors'
import { createStructuredSelector } from 'reselect'

const EditModal = ({ editModalEnabled, disableEditModal, editModalTicket, updateTicket, userList}) => {
    //-- Modal State
    const [ visibility, setVisibility ] = useState("hidden")
    const [ opacity, setOpacity ] = useState("0")
    const [ top, setTop ] = useState("4%")

    //--Current Input Values
    const [ issue, setIssue ] = useState('')
    const [ reporter, setReporter ] = useState('Unassigned')
    const [ description, setDescription ] = useState('')
    const [ priority, setPriority ] = useState("low")

    useEffect(() => {
        if(editModalEnabled) {
            setVisibility("visible")
            setOpacity('1')
            setTop('8.5%')
        } else {
            setVisibility("hidden")
            setOpacity('0')
            setTop('4%')
            setIssue('')
            setReporter('Unassigned')
            setDescription('')
            setPriority("low")
        }
    }, [editModalEnabled])

    useEffect(() => {
        if(editModalTicket) {
            const { issue, user, description, priority } = editModalTicket
            setIssue(issue)
            setReporter(user)
            setDescription(description)
            setPriority(priority)
        } 
    }, [editModalTicket])

    const handleIssueChange = event => {
        setIssue(event.target.value)
    }

    const handleReporterChange = event => {
        setReporter(event.target.value)
    }

    const handleDescriptionChange = event => {
        setDescription(event.target.value)
    }

    const handlePriorityChange = event => {
        setPriority(event.target.value)
    }

    const handleSubmit = () => {
        const currentDate = new Date()

        const newTicket = {
            ...editModalTicket,
            issue: issue,
            user: reporter,
            description: description,
            priority: priority,
            lastUpdated: currentDate,
        }

        updateTicket(newTicket)
        disableEditModal()
    }


    return (
        <Fragment>
            <div className="modal-background" style={{
                visibility: visibility,
                opacity: opacity,
            }}>
                <div className="edit-modal" style={{
                    visibility: visibility,
                    opacity: opacity,
                    top: top
                }}>
                    <div className="modal-content">
                        <h1 className="modal-title">Modify Ticket</h1>

                        <div className="input-fields">
                            <div className="label1">
                                <label htmlFor="">Issue</label>
                            </div>                         
                            
                            <div className="label2">
                                <label htmlFor="">Reporter</label>
                            </div>
                            <div className="label3">
                                <label htmlFor="">Description</label>
                            </div>
                            <div className="label4">
                                <label htmlFor="">Priority</label>
                            </div>

                            <div className="issue">
                                <textarea type="text" onChange={handleIssueChange} value={issue} rows="3" cols="50" />
                            </div>
                            <div className="description">
                                <textarea onChange={handleDescriptionChange} value={description} rows="10" cols="50" />
                            </div>
                            <div className="reporter">
                                <select onChange={handleReporterChange} value={reporter}>
                                    <option value="Unassigned">Unassigned</option>
                                    {
                                        userList.map((user, index) => (
                                            <option key={index} value={user}>{user}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="priority">
                                <select onChange={handlePriorityChange} value={priority}>
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                            </div>
                        </div>

                        <div className="buttons">
                            <div className="submit-button">
                                <button className="btn" onClick={handleSubmit}>Submit</button>
                            </div>
                            <div className="cancel-button">
                                <button className="btn" onClick={()=>disableEditModal()}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    editModalEnabled: selectEditModalEnabled,
    editModalTicket: selectEditModalTicket,
    userList: selectUserList
})

const mapDispatchToProps = dispatch => ({
    disableEditModal: () => dispatch(disableEditModal()),
    updateTicket: ticket => dispatch(updateTicket(ticket))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditModal)
