import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { RemoteUserListModel } from '@/data/models'
import { UnexpectedError } from '@/domain/errors'
import { LoadUserList } from '@/domain/usecases'

export class RemoteLoadUserList implements LoadUserList {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadUserList.Model[]>
  ) {}

  async load (): Promise<LoadUserList.Model[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    })
    const remoteUserList = httpResponse.body || []
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return remoteUserList.map(remoteUser => ({
        ...remoteUser
      }))
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadUserList {
  export type Model = RemoteUserListModel
}
