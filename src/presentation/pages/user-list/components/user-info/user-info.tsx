import Styles from './user-info-styles.scss'
import { LoadUserList } from '@/domain/usecases'

import React from 'react'

type Props = {
  user: LoadUserList.Model
}

const UserListItem: React.FC<Props> = ({ user }: Props) => {
 
  return (
    <div className={Styles.container}>
        <h1>{user.name}</h1>
        <span>{user.email}</span>
        <small>{user.username}</small>
    </div>
  )
}

export default UserListItem
