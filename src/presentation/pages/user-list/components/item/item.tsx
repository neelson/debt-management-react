import Styles from './item-styles.scss'
import { LoadDebtList, LoadUserList } from '@/domain/usecases'

import React from 'react'
import { useRecoilState } from 'recoil'
import { userListState } from '@/presentation/pages/user-list/components'

type Props = {
  user: LoadUserList.Model
  handleClick: any
}

const UserListItem: React.FC<Props> = ({ user, handleClick }: Props) => {
  const [state, setState] = useRecoilState(userListState)
 
  return (
    <li className={Styles.userListItemWrap}>
      <span onClick={() => handleClick(user)}>
        <div className={Styles.container}>
          <h2>{user.name}</h2>
          <small>{user.username}</small>
          <h1>{user.value? `R$ ${(user.value).toFixed(2)}` : `R$ ${(0).toFixed(2)}` }</h1>
        </div>
      </span>
    </li>
  )
}

export default UserListItem
