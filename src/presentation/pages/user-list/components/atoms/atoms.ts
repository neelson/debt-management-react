import { LoadDebtList, LoadUserList, LoadSimplifiedDebts } from '@/domain/usecases'

import { atom } from 'recoil'

export const userListState = atom({
  key: 'userListState',
  default: {
    selectedUser: null,
    users: [] as LoadUserList.Model[],
    simplifiedDebts: [] as LoadSimplifiedDebts.Model[],
    debts: [] as LoadDebtList.Model[],
    showUsers: true,
    error: '',
    reload: false
  }
})
