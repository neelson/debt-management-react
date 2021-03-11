import Styles from './item-styles.scss'
import { LoadDebtList } from '@/domain/usecases'
import { IconName, Icon } from '@/presentation/components'

import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  debt: LoadDebtList.Model
  handleDelete: any
}

const DebtListItem: React.FC<Props> = ({ debt,handleDelete }: Props) => {
  return (
    <li className={Styles.debtListItemWrap}>
      <div className={Styles.infos}>
        <small>{debt.date}</small>
        <h1>{`R$ ${debt.value.toFixed(2)}`}</h1>
        <h3>{debt.description}</h3>
      </div>
      <div className={Styles.actions}>
        <Link to={`/user/${debt.userId}/debt/${debt._id}`}>
          <Icon className={Styles.iconWrap} iconName={IconName.edit} />
        </Link>
        <button onClick={() => handleDelete(debt)} type="button"> 
          <Icon className={Styles.iconWrap} iconName={IconName.trash} />
        </button>
      </div>
    </li>
  )
}

export default DebtListItem
