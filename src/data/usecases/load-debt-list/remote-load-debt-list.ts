import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { RemoteDebtListModel } from '@/data/models'
import { UnexpectedError } from '@/domain/errors'
import { LoadDebtList } from '@/domain/usecases'

export class RemoteLoadDebtList implements LoadDebtList {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadDebtList.Model[]>
  ) {}

  async loadDebtByUserId (id: string): Promise<LoadDebtList.Model[]> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${id}/debts` ,
      method: 'get'
    })
    const remoteDebtList = httpResponse.body || []
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return remoteDebtList.map(remoteDebt => ({
        ...remoteDebt
      }))
      case HttpStatusCode.noContent: return []
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadDebtList {
  export type Model = RemoteDebtListModel
}
