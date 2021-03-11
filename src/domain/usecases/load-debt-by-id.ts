import { DebtModel } from '@/domain/models'

export interface LoadDebtById {
  loadDebtById: (id: string) => Promise<LoadDebtById.Model>
}

export namespace LoadDebtById {
  export type Model = DebtModel
}
