export const selectFirm = (firm) => ({
  type: 'SELECT_FIRM',
  payload: firm,
})

export const selectLawyer = (lawyer) => ({
  type: 'SELECT_LAWYER',
  payload: lawyer,
})

export const bookAppointment = (appointment) => ({
  type: 'BOOK_APPOINTMENT',
  payload: appointment,
})

export const bookSlot = (lawyerId, slot) => ({
  type: 'BOOK_SLOT',
  payload: { lawyerId, slot },
})
