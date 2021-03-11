import { makeAddDebtValidation } from '@/main/factories/pages'
import { makeRemoteAddDebt, makeRemoteLoadDebtById, makeRemoteSaveDebt } from '@/main/factories/usecases'
import { AddDebt } from '@/presentation/pages'

import React from 'react'

export const makeAddDebt: React.FC = () => {
  return (
    <AddDebt
      saveDebt={makeRemoteSaveDebt()}
      addDebt={makeRemoteAddDebt()}
      loadDebtById={makeRemoteLoadDebtById()}
      validation={makeAddDebtValidation()}
    />
  )
}
