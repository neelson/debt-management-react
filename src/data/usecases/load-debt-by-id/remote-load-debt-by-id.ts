import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { RemoteDebtListModel } from '@/data/models'
import { UnexpectedError } from '@/domain/errors'
import { LoadDebtById } from '@/domain/usecases'

export class RemoteLoadDebtById implements LoadDebtById {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadDebtById.Model>
  ) {}

  async loadDebtById (id: string): Promise<LoadDebtById.Model> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${id}` ,
      method: 'get'
    })
    const remoteDebtById = httpResponse.body
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return { ...remoteDebtById}
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadDebtById {
  export type Model = RemoteDebtListModel
}
