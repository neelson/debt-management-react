import Styles from './item-empty-styles.scss'

import React from 'react'

const UserListItemEmpty: React.FC = () => {
  return (
    <>
      <li className={Styles.userListItemEmpty}>
        Nenhum usuário encontrado...
      </li>
      
    </>
  )
}

export default UserListItemEmpty
