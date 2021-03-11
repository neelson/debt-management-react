import { atom } from 'recoil'

export const debtState = atom({
  key: 'debtState',
  default: {
    isLoading: false,
    isFormInvalid: true,
    id: '',
    description: '',
    descriptionError: '',
    mainError: '',
    value: null,
    valueError: '',
    date: null,
    dateError: '',
    userId: ''
  }
})
