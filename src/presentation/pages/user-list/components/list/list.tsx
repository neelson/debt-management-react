import Styles from './list-styles.scss'
import { LoadDebtList, LoadUserList } from '@/domain/usecases'
import { UserListItem, UserListEmpty } from '@/presentation/pages/user-list/components'

import React from 'react'

type Props = {
  users: LoadUserList.Model[]
  handleClick: any
}

const UserList: React.FC<Props> = ({ users, handleClick }: Props) => {
  return (
    <ul className={Styles.listWrap} data-testid="user-list">
      {users.length
        ? users.map((user: LoadUserList.Model) => <UserListItem handleClick={handleClick}  key={user.id} user={user} />)
        : <UserListEmpty />
      }
    </ul>
  )
}

export default UserList
