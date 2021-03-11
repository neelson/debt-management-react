import { makeApiUrl } from '@/main/factories/http'
import { makeAxiosHttpClient } from '@/main/factories/http'
import { LoadDebtById } from '@/domain/usecases'
import { RemoteLoadDebtById } from '@/data/usecases'

export const makeRemoteLoadDebtById = (): LoadDebtById =>
  new RemoteLoadDebtById(makeApiUrl(`/debt`), makeAxiosHttpClient())
