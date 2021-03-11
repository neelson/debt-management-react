import { UserListModel } from '@/domain/models'

export interface LoadUserList {
  load: () => Promise<LoadUserList.Model[]>
}

export namespace LoadUserList {
  export type Model = UserListModel
}
