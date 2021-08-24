import React, { Fragment, useState, useEffect } from 'react'
import './Create-Modal.styles.scss'
import { connect } from 'react-redux'
import { disableModal } from '../../../Redux/modal/modal.actions'
import { addNewTicket } from '../../../Redux/tickets/ticket.actions'
import { dateTimeFormatter } from '../../../JS_Utilities/_utilities'

const CreateModal = ({ modalEnabled, disableModal, addNewTicket, userList }) => {
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
        if(modalEnabled) {
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
    }, [modalEnabled])

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

        let newDate = new Date()

        const newTicket = {
            issue: issue,
            description: description,
            user: reporter,
            status: "new",
            priority: priority,
            lastUpdated: newDate,
            dateCreated: newDate,
            assigned: "Unassigned",
            comments: []
        }

        addNewTicket(newTicket)
        disableModal()
    }


    return (
        <Fragment>
            <div className="modal-background" style={{
                visibility: visibility,
                opacity: opacity,
            }}>
                <div className="modal" style={{
                    visibility: visibility,
                    opacity: opacity,
                    top: top
                }}>
                    <div className="modal-content">
                        <h1 className="modal-title">Create New Ticket</h1>

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
                            <div className="description">
                                <textarea onChange={handleDescriptionChange} value={description} rows="10" cols="50" />
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
                                <button className="btn" onClick={()=>disableModal()}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    modalEnabled: state.modal.modalEnabled,
    userList: state.users.userList
})

const mapDispatchToProps = dispatch => ({
    disableModal: () => dispatch(disableModal()),
    addNewTicket: newTicket => dispatch(addNewTicket(newTicket))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateModal)
