import Styles from './list-styles.scss'
import { LoadDebtList } from '@/domain/usecases'
import { DebtListItem, DebtListEmpty } from '@/presentation/pages/user-list/components'

import React from 'react'

type Props = {
  debts: LoadDebtList.Model[]
  handleDelete: any
}

const DebtList: React.FC<Props> = ({ debts, handleDelete }: Props) => {
  return (
    <ul className={Styles.listWrap} data-testid="debt-list">
      {debts.length
        ? debts.map((debt: LoadDebtList.Model) => <DebtListItem handleDelete={handleDelete} key={debt._id} debt={debt} />)
        : <DebtListEmpty />
      }
    </ul>
  )
}

export default DebtList
