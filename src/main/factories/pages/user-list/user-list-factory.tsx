import { makeRemoteLoadDebtList, makeRemoteLoadUserList, makeRemoteDeleteDebt, makeRemoteLoadSimplifiedDebts } from '@/main/factories/usecases'
import { UserList } from '@/presentation/pages'

import React from 'react'

export const makeUserList: React.FC = () => {
  return (
    <UserList
      loadUserList={makeRemoteLoadUserList()}
      loadSimplifiedDebts={makeRemoteLoadSimplifiedDebts()}
      loadDebtList={makeRemoteLoadDebtList()}
      deleteDebt={makeRemoteDeleteDebt()}
    />
  )
}
