import { SimplifiedDebtModel } from '@/domain/models'

export interface LoadSimplifiedDebts {
  load: () => Promise<LoadSimplifiedDebts.Model[]>
}

export namespace LoadSimplifiedDebts {
  export type Model = SimplifiedDebtModel
}
