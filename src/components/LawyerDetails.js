import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import './LawyerDetails.css' 
import Header from './Header'
import Footer from './Footer'

const LawyerDetails = () => {
  const lawyer = useSelector((state) => state.selectedLawyer)
  const navigate = useNavigate()

  const handleBookAppointment = () => {
    navigate(`/lawyer/${lawyer.id}/slots`)
  }

  const handleViewHistory = () => {
    navigate(`/lawyer/${lawyer.id}/history`)
  }

  return (
    <>
      <Header />
      <div className="lawyer-details">
        <Typography variant="h5" className="lawyer-name">
          {lawyer.name}
        </Typography>
        <Typography variant="subtitle1" className="lawyer-specialization">
          Specialization: {lawyer.specialization}
        </Typography>
        <Typography variant="subtitle1" className="lawyer-fee">
          Appointment Fee: ${lawyer.appointmentFee}
        </Typography>
        <Typography variant="subtitle1" className="lawyer-slots">
          Available Slots: {lawyer.availableSlots.length}
        </Typography>
        <div className="button-container">
          <Button
            variant="contained"
            color="primary"
            onClick={handleBookAppointment}
            className="book-button"
          >
            Book Appointment
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleViewHistory}
            className="history-button"
          >
            View Appointment History
          </Button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default LawyerDetails
