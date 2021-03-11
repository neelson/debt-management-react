import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'
import { SaveDebt } from '@/domain/usecases'
import { RemoteSaveDebt } from '@/data/usecases'

export const makeRemoteSaveDebt = (): SaveDebt =>
  new RemoteSaveDebt(makeApiUrl('/debt'), makeAxiosHttpClient())
