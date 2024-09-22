import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectFirm } from '../redux/actions'
import { useNavigate } from 'react-router-dom'
import { List, ListItem, ListItemText } from '@mui/material'
import Header from './Header'
import './FirmList.css'
import Footer from './Footer'

const FirmList = () => {
  const firms = useSelector((state) => state.firms)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  console.log('Firms:', firms)
  const handleFirmClick = (firm) => {
    dispatch(selectFirm(firm))
    navigate(`/firm/${firm.id}`)
  }

  return (
    <>
      <Header />
      <List className="firm-list">
        {' '}
        {firms.map((firm) => (
          <ListItem
            button
            key={firm.id}
            onClick={() => handleFirmClick(firm)}
            className="firm-list-item"
          >
            <ListItemText primary={firm.name} />
          </ListItem>
        ))}
      </List>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  )
}

export default FirmList
