import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom'
import { deleteAppointment } from '../../actions/appointments'
import { useRemoveAppointment } from '../../store/appointments'
import Popup from '../Popups'


const styles = {

    appointment: {

        backgroundColor: 'white',
        color: 'black',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        listStyleType: 'none',
        width: '95vw',
        height: '5vh',
        borderRadius: '5px'
    },
    deleteBtn: {
        width: '35px',
        height: '35px',
        border: 'none',
        background: 'url(/img/deleteIcon.svg)',
        backgroundSize: 'cover',
    },
}

const AppointmentEntry = (props) => {
   
    const [show, setShow] = React.useState(false)

    const handleNoOpt = () => {
        setShow(false)
    }

    let id = props.appointment.userid
    let fromHour = props.appointment.start_at
    let toHour = props.appointment.end_at
    let day = props.appointment.day
    let note = props.appointment.note
    const removeAppointment = useRemoveAppointment()
    const handleDeleteButton = (clickId) => {
        deleteAppointment(clickId, (err, msg) => {
            //TODO: handle error properly
            if (err) console.log(err)
            removeAppointment(clickId)
            return
        })
    }

    const handleYesOpt = () => { 
        handleDeleteButton(id) 
        setShow(false)
    }
   
    return (
        //TODO: link to the page that khalid is working on - Appointment page.
     

        <ul style={styles.appointment}>
           
            <Link to={`/appointmentCard/${id}`}>
            <li>{id}</li>
            
            <li>{fromHour} </li>

            <li>{toHour} </li>
            </Link>
            <li><Button style={styles.deleteBtn} onClickButton={() => setShow(true)} />
                <Popup isOpen={show} setShow={(el) => setShow(el)} labels={['yes', 'no']} callbacks={[handleYesOpt, handleNoOpt]}></Popup> </li>
        </ul>

    )
}

export default AppointmentEntry