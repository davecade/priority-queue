import React, { Fragment, useState, useEffect } from 'react'
import './Modal.styles.scss'
import Button from '../Button/Button.component'
import { connect } from 'react-redux'

const Modal = ({ modalEnabled }) => {
    const [ visibility, setVisibility ] = useState("hidden")

    useEffect(() => {
        if(modalEnabled) {
            setVisibility("visible")
        } else {
            setVisibility("hidden")
        }
    }, [modalEnabled])

    return (
        <Fragment>
            <div className="modal-background" style={ { visibility: visibility } }>
                <div className="modal" style={ { visibility: visibility } }>
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
                                <input type="text" />
                            </div>
                            <div className="reporter">
                                <select name="" id="">
                                    <option value="">Caity</option>
                                    <option value="">Coco</option>
                                    <option value="">Cruezian</option>
                                </select>
                            </div>
                            <div className="description">
                                <textarea id="w3review" name="w3review" rows="10" cols="50" />
                            </div>
                            <div className="priority">
                                <select name="" id="">
                                    <option value="">Low</option>
                                    <option value="">Medium</option>
                                    <option value="">High</option>
                                </select>
                            </div>
                        </div>

                        <div className="buttons">
                            <div className="submit-button">
                                <Button text={"SUBMIT"} />
                            </div>
                            <div className="cancel-button">
                                <Button text={"CANCEL"} />
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

export default connect(mapStateToProps)(Modal)
