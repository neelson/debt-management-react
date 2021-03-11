import { makeApiUrl } from '@/main/factories/http'
import { makeAxiosHttpClient } from '@/main/factories/http'
import { DeleteDebt } from '@/domain/usecases'
import { RemoteDeleteDebt } from '@/data/usecases'

export const makeRemoteDeleteDebt = (): DeleteDebt =>
  new RemoteDeleteDebt(makeApiUrl(`/debt`), makeAxiosHttpClient())
