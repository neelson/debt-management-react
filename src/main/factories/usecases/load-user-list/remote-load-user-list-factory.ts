import { makeAxiosHttpClient } from '@/main/factories/http'
import { LoadUserList } from '@/domain/usecases'
import { RemoteLoadUserList } from '@/data/usecases'

export const makeRemoteLoadUserList = (): LoadUserList =>
  new RemoteLoadUserList('https://jsonplaceholder.typicode.com/users', makeAxiosHttpClient())
