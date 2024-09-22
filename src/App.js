import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import FirmList from './components/FirmList'
import LawyerDetails from './components/LawyerDetails'
import AppointmentHistory from './components/AppointmentHistory'
import AvailableSlots from './components/AvailableSlots'
import LawyerList from './components/LawyerList'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<FirmList />} />
          <Route path="/firm/:firmId" element={<LawyerList />} />
          <Route
            path="/firm/:firmId/lawyer/:lawyerId"
            element={<LawyerDetails />}
          />
          <Route
            path="/lawyer/:lawyerId/history"
            element={<AppointmentHistory />}
          />
          <Route path="/lawyer/:lawyerId/slots" element={<AvailableSlots />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
