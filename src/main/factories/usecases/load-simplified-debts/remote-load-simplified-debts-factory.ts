import { makeApiUrl } from '@/main/factories/http'
import { makeAxiosHttpClient } from '@/main/factories/http'
import { LoadSimplifiedDebts } from '@/domain/usecases'
import { RemoteLoadSimplifiedDebts } from '@/data/usecases'

export const makeRemoteLoadSimplifiedDebts = (): LoadSimplifiedDebts =>
  new RemoteLoadSimplifiedDebts(makeApiUrl(`/debts`), makeAxiosHttpClient())
