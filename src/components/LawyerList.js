import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectLawyer } from '../redux/actions'
import { useNavigate } from 'react-router-dom'
import { List, ListItem, ListItemText } from '@mui/material'
import './LawyerList.css' 
import Header from './Header'
import Footer from './Footer'


const LawyerList = () => {
  const firm = useSelector((state) => state.selectedFirm)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLawyerClick = (lawyer) => {
    dispatch(selectLawyer(lawyer))
    navigate(`/firm/${firm.id}/lawyer/${lawyer.id}`)
  }

  return (
    <>
    <Header /> 
    <div className="lawyer-list">
      <h2 className="firm-name">{firm.name} Lawyers</h2>
      <List className="list-container">
        {firm.lawyers.map((lawyer) => (
            <ListItem
            button
            key={lawyer.id}
            onClick={() => handleLawyerClick(lawyer)}
            className="lawyer-item"
            >
            <ListItemText primary={lawyer.name} className="lawyer-name" />
          </ListItem>
        ))}
      </List>
    </div>
    <Footer />
    </>
  )
}

export default LawyerList
