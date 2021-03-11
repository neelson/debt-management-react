import { makeApiUrl } from '@/main/factories/http'
import { makeAxiosHttpClient } from '@/main/factories/http'
import { LoadDebtList } from '@/domain/usecases'
import { RemoteLoadDebtList } from '@/data/usecases'

export const makeRemoteLoadDebtList = (): LoadDebtList =>
  new RemoteLoadDebtList(makeApiUrl(`/user`), makeAxiosHttpClient())
