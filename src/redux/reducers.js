const initialState = {
  firms: [
    {
      id: 1,
      name: 'Law Firm 1',
      lawyers: [
        {
          id: 1,
          name: 'Lawyer A',
          specialization: 'Criminal',
          appointmentFee: 100,
          availableSlots: [
            '10:00 AM - 10:30 AM',
            '11:00 AM - 11:30 AM',
            '12:00 PM - 12:30 PM',
          ],
          appointments: [],
        },
        {
          id: 2,
          name: 'Lawyer B',
          specialization: 'Property Dispute',
          appointmentFee: 120,
          availableSlots: [
            '2:00 PM - 2:30 PM',
            '3:00 PM - 3:30 PM',
            '4:00 PM - 4:30 PM',
          ],
          appointments: [],
        },
      ],
    },
    {
      id: 2,
      name: 'Law Firm 2',
      lawyers: [
        {
          id: 3,
          name: 'Lawyer C',
          specialization: 'Divorce',
          appointmentFee: 150,
          availableSlots: ['9:00 AM - 9:30 AM', '10:00 AM - 10:30 AM'],
          appointments: [],
        },
        {
          id: 4,
          name: 'Lawyer D',
          specialization: 'Criminal',
          appointmentFee: 110,
          availableSlots: ['1:00 PM - 1:30 PM', '2:30 PM - 3:00 PM'],
          appointments: [],
        },
      ],
    },
    {
      id: 3,
      name: 'Law Firm 3',
      lawyers: [
        {
          id: 5,
          name: 'Lawyer E',
          specialization: 'Corporate Law',
          appointmentFee: 200,
          availableSlots: ['11:00 AM - 11:30 AM', '12:00 PM - 12:30 PM'],
          appointments: [],
        },
        {
          id: 6,
          name: 'Lawyer F',
          specialization: 'Intellectual Property',
          appointmentFee: 180,
          availableSlots: ['3:00 PM - 3:30 PM', '4:00 PM - 4:30 PM'],
          appointments: [],
        },
      ],
    },
    {
      id: 4,
      name: 'Law Firm 4',
      lawyers: [
        {
          id: 7,
          name: 'Lawyer G',
          specialization: 'Employment Law',
          appointmentFee: 140,
          availableSlots: ['9:30 AM - 10:00 AM', '10:30 AM - 11:00 AM'],
          appointments: [],
        },
        {
          id: 8,
          name: 'Lawyer H',
          specialization: 'Immigration Law',
          appointmentFee: 160,
          availableSlots: ['1:00 PM - 1:30 PM', '2:00 PM - 2:30 PM'],
          appointments: [],
        },
      ],
    },
  ],
  selectedFirm: null,
  selectedLawyer: null,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_FIRM':
      return { ...state, selectedFirm: action.payload }
    case 'SELECT_LAWYER':
      return { ...state, selectedLawyer: action.payload }
    case 'BOOK_SLOT':
      // Find the lawyer in the firm and update availableSlots and appointments
      const updatedLawyers = state.selectedFirm.lawyers.map((lawyer) => {
        if (lawyer.id === action.payload.lawyerId) {
          return {
            ...lawyer,
            availableSlots: lawyer.availableSlots.filter(
              (slot) => slot !== action.payload.slot
            ),
            appointments: [
              ...lawyer.appointments,
              { date: action.payload.slot },
            ],
          }
        }
        return lawyer
      })

      // Update the selected lawyer with the new slot/appointment changes
      const updatedSelectedLawyer = {
        ...state.selectedLawyer,
        availableSlots: state.selectedLawyer.availableSlots.filter(
          (slot) => slot !== action.payload.slot
        ),
        appointments: [
          ...state.selectedLawyer.appointments,
          { date: action.payload.slot },
        ],
      }

      return {
        ...state,
        selectedFirm: {
          ...state.selectedFirm,
          lawyers: updatedLawyers,
        },
        selectedLawyer: updatedSelectedLawyer,
      }
    default:
      return state
  }
}

export default rootReducer
