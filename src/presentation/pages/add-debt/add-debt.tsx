import Styles from './add-debt-styles.scss'
import { Validation } from '@/presentation/protocols'
import { AddDebt, LoadDebtById, SaveDebt } from '@/domain/usecases'
import { debtState, Input, SubmitButton, FormStatus } from './components'

import { useRecoilState, useResetRecoilState } from 'recoil'
import { useHistory, useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import { Icon, IconName } from '@/presentation/components'

type Props = {
  validation: Validation
  addDebt: AddDebt
  loadDebtById: LoadDebtById
  saveDebt: SaveDebt
}

const AddDebt: React.FC<Props> = ({ validation, addDebt, loadDebtById, saveDebt }: Props) => {
  const resetDebtState = useResetRecoilState(debtState)
  const [state, setState] = useRecoilState(debtState)
  const history = useHistory()
  
  const { userId, debtId } = useParams()
  
  useEffect(() => {
    if (!debtId) return
    loadDebtById.loadDebtById(debtId)
    .then(debt => setState(old => ({ ...old, ...debt })))
  }, [debtId])
  
  useEffect(() => resetDebtState(), [])
  useEffect(() => validate('description'), [state.description])
  useEffect(() => validate('value'), [state.value])
  useEffect(() => validate('date'), [state.date])

  const validate = (field: string): void => {
    const { description, value, date } = state
    const formData = { description, value, date }
    setState(old => ({ ...old, [`${field}Error`]: validation.validate(field, formData) }))
    setState(old => ({ ...old, isFormInvalid: !!old.descriptionError || !!old.valueError || !!old.dateError  }))
  }

  const handleBack = () => {
    resetDebtState()
    history.push('/')
  }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (state.isLoading || state.isFormInvalid) {
        return
      }
      setState(old => ({ ...old, isLoading: true }))
      if (!state.id) {
        await addDebt.add({
          description: state.description,
          value: Number(state.value),
          date: state.date,
          userId: userId
        })
      } else {
        await saveDebt.save({
          id: state.id,
          description: state.description,
          value: Number(state.value),
          date: state.date,
          userId: userId
        })
      }
      
      resetDebtState()
      history.replace('/')
    } catch (error) {
      setState(old => ({
        ...old,
        isLoading: false,
        mainError: error.message
      }))
    }
  }
  return (
    <div className={Styles.debtWrap}>
      <button onClick={handleBack} className={Styles.back} type="button">
        <Icon className={Styles.iconWrap} iconName={IconName.back} />
      </button>
      <form data-testid="form" className={Styles.form} onSubmit={handleSubmit}>
        <h2>Débito</h2>
        <Input type="text" name="description" placeholder="Digite a descrição" />
        <Input type="text" name="value" placeholder="Digite o valor" />
        <Input type="text" name="date" placeholder="Digite a data" />
       
        <SubmitButton text="Salvar" />
        <FormStatus />
      </form>
    </div>
  )
}

export default AddDebt
