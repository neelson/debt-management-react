import { DebtModel } from '@/domain/models'

export interface AddDebt {
  add: (params: AddDebt.Params) => Promise<AddDebt.Model>
}

export namespace AddDebt {
  export type Params = {
    description: string,
    value: number,
    date: Date,
    userId: string
  }

  export type Model = DebtModel
}
