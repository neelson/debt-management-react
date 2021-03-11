import { makeUserList, makeAddDebt } from '@/main/factories/pages'
import { currentUserState } from '@/presentation/components'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import React from 'react'

const Router: React.FC = () => {
  const state = {  }
  return (
    <RecoilRoot initializeState={({ set }) => set(currentUserState, state)}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={makeUserList} />
          <Route path="/user/:userId" exact component={makeAddDebt} />
          <Route path="/user/:userId/debt/:debtId" exact component={makeAddDebt} />
        </Switch>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default Router
