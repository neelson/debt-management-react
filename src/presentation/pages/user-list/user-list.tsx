import Styles from './user-list-styles.scss'
import { UserList, DebtList, UserInfo, userListState } from './components'
import { LoadUserList, LoadDebtList, DeleteDebt, LoadSimplifiedDebts } from '@/domain/usecases'
import { Icon, IconName } from '@/presentation/components'

import { useRecoilState } from 'recoil'
import { useHistory } from 'react-router-dom'
import React, { useEffect } from 'react'
import { UserListModel, DebtModel } from '@/domain/models'

type Props = {
  loadUserList: LoadUserList
  loadSimplifiedDebts: LoadSimplifiedDebts
  loadDebtList: LoadDebtList
  deleteDebt: DeleteDebt

}

const UserContent: React.FC<Props> = ({ loadUserList, loadSimplifiedDebts , loadDebtList, deleteDebt }: Props) => {
  const history = useHistory()
  const [state, setState] = useRecoilState(userListState)

  const handleShowUserList = () => {
    setState(old => ({...old, showUsers: true}))
  }
  const handle = (data: UserListModel) => {
    loadDebtList.loadDebtByUserId(data.id)
      .then(debts => setState(old => ({ ...old, debts })))
    
    setState(old => ({...old, selectedUser: data, showUsers: false}))  
  }
  const handleDelete = (data: DebtModel) => {
    deleteDebt.delete(data._id).then(res => {
      const newList = state.debts.filter(el => el._id !== data._id)
      setState(old => ({...old, debts: newList}))
    })
  }
  const handleAddDebt = () => {
    if (!state.selectedUser) return
    history.push(`/user/${state.selectedUser.id}`)
  }
  const getSimplifiedDebts = () => {
    loadSimplifiedDebts.load()
    .then(simplifiedDebts => setState(newValue => ({...newValue, simplifiedDebts })))
  }

  useEffect(() => {
    getSimplifiedDebts()
  }, [state.debts])
  useEffect(() => {
    loadUserList.load()
      .then(users => setState(old => ({ ...old, users })))
      .finally(() => {
        getSimplifiedDebts()
      })

    if (state.selectedUser) handle(state.selectedUser)
  }, [])
  useEffect(() => {
      if (!state.simplifiedDebts) return
      let users = [...state.users]
      if (users?.length === 0) return
      const debts = [...state.simplifiedDebts]
      users.forEach((user) => {
        const debt = debts.filter((debt) => {
          return debt.userId == user.id
        })
        const newValue = (debt?.length <= 0) ? {...user, value: 0} : {...user, value: debt[0].value}
        const index = users.findIndex(user => user.id === newValue.id)
        users[index] = newValue
      })
      setState(old => ({...old, users}))
  }, [state.simplifiedDebts])
  return (
    <div className={Styles.userListWrap}>
      { state?.users?.length > 0 
        ? ( <>
              <div className={`${Styles.userContainer} ${state.showUsers ? Styles.show : ''}`}>
                <UserList handleClick={handle} users={state.users}/>
              </div>
              <div className={`${Styles.debtContainer} ${!state.showUsers ? Styles.show : ''}`}>
                
                <button onClick={handleShowUserList} className={Styles.showUsers} type="button">
                  <Icon className={Styles.iconWrap} iconName={IconName.menu} />
                </button>
                { state.selectedUser ? <UserInfo user={state.selectedUser}/> : ''}
                <DebtList debts={state.debts} handleDelete={handleDelete} />
                { state?.selectedUser? 
                  (<button onClick={handleAddDebt} type="button" className={Styles.addDebt}>
                    <Icon className={Styles.iconWrap} iconName={IconName.add} />
                  </button>): null }
              </div>
          </>
      ) : ( <div className={Styles.emptyUsersContainer}><span>Nenhum usuário encontrado...</span></div>) }
    </div>
  )
}

export default UserContent
