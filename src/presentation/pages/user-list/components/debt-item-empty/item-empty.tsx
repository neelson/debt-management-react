import Styles from './item-empty-styles.scss'

import React from 'react'

const DebtListItemEmpty: React.FC = () => {
  return (
    <>
      <li className={Styles.debtListItemEmpty}>
        <span>Não existem débitos para serem listados...</span>
      </li>
      
    </>
  )
}

export default DebtListItemEmpty
