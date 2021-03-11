import { DebtModel } from '@/domain/models'

export interface LoadDebtList {
  loadDebtByUserId: (id: string) => Promise<LoadDebtList.Model[]>
}

export namespace LoadDebtList {
  export type Model = DebtModel
}
