import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bookSlot } from '../redux/actions'
import { useNavigate } from 'react-router-dom'
import { List, ListItem, ListItemText } from '@mui/material'
import './AvailableSlots.css' // Import the external CSS file
import Header from './Header'
import Footer from './Footer'
const AvailableSlots = () => {
  const lawyer = useSelector((state) => state.selectedLawyer) // This should get the updated lawyer
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSlotClick = (slot) => {
    dispatch(bookSlot(lawyer.id, slot)) // Dispatch action to book the slot
    alert(`Appointment booked for ${slot}`)
    navigate(`/lawyer/${lawyer.id}/history`) // Navigate to the appointment history page
  }

  return (
    <>
    <Header /> 
    <div className="available-slots">
      <h3 className="header">Available Slots for {lawyer.name}</h3>
      <List className="slot-list">
        {lawyer.availableSlots.length > 0 ? (
          lawyer.availableSlots.map((slot, index) => (
            <ListItem
            button
            key={index}
            onClick={() => handleSlotClick(slot)}
            className="slot-item"
            >
              <ListItemText primary={`Slot: ${slot}`} />
            </ListItem>
          ))
        ) : (
          <p className="no-slots">No slots available</p>
        )}
      </List>
    </div>
    <Footer />
    </>
  )
}

export default AvailableSlots
