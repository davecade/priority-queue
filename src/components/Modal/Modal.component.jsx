import React, { Fragment, useState, useEffect } from 'react'
import './Modal.styles.scss'
import { connect } from 'react-redux'
import { disableModal } from '../../Redux/modal/modal.actions'
import { addNewTicket } from '../../Redux/tickets/ticket.actions'

const Modal = ({ modalEnabled, disableModal, addNewTicket }) => {
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
        const currentDate = new Date()
        const day = currentDate.getDate()
        const month = currentDate.getMonth()
        const year = currentDate.getFullYear()
        const hour = currentDate.getHours()
        const minute = currentDate.getMinutes()

        const z = num => num<10 ? `0${num}` : num
        const y = num => num.toString().slice(2)

        const newTicket = {
            issue: issue,
            description: description,
            user: reporter,
            status: "new",
            priority: priority,
            date: `${z(day)}/${z(month)}/${y(year)} ${z(hour)}:${z(minute)}`,
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
                                <input type="text" onChange={handleIssueChange} value={issue} />
                            </div>
                            <div className="reporter">
                                <select onChange={handleReporterChange} value={reporter}>
                                    <option value="Unassigned">Unassigned</option>
                                    <option value="Caity">Caity</option>
                                    <option value="Coco">Coco</option>
                                    <option value="Dave">Dave</option>
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
    modalEnabled: state.modal.modalEnabled
})

const mapDispatchToProps = dispatch => ({
    disableModal: () => dispatch(disableModal()),
    addNewTicket: newTicket => dispatch(addNewTicket(newTicket))
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
