import React from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem, ListItemText } from '@mui/material';
import './AppointmentHistory.css'; 
import Header from './Header';
import Footer from './Footer';

const AppointmentHistory = () => {
  const lawyer = useSelector((state) => state.selectedLawyer); 

  return (
    <>
      <Header />
    <div className="appointment-history">
      <h3 className="header">{lawyer.name}'s Appointment History</h3>
      <List className="appointment-list">
        {lawyer.appointments.length > 0 ? (
          lawyer.appointments.map((appointment, index) => (
            <ListItem key={index} className="appointment-item">
              <ListItemText primary={`Appointment on: ${appointment.date}`} />
            </ListItem>
          ))
        ) : (
          <p className="no-appointments">No appointments yet</p>
        )}
      </List>
    </div>
    <Footer />
    </>
  );
}

export default AppointmentHistory;
