import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'
import { AddDebt } from '@/domain/usecases'
import { RemoteAddDebt } from '@/data/usecases'

export const makeRemoteAddDebt = (): AddDebt =>
  new RemoteAddDebt(makeApiUrl('/debt'), makeAxiosHttpClient())
