import { DebtModel } from '@/domain/models'

export interface SaveDebt {
  save: (params: SaveDebt.Params) => Promise<SaveDebt.Model>
}

export namespace SaveDebt {
  export type Params = {
    id: string,
    description: string,
    value: number,
    date: Date,
    userId: string
  }

  export type Model = DebtModel
}
