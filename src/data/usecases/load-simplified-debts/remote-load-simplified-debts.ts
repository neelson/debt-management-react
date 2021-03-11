import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { RemoteSimplifiedDebtsModel } from '@/data/models'
import { UnexpectedError } from '@/domain/errors'
import { LoadSimplifiedDebts } from '@/domain/usecases'

export class RemoteLoadSimplifiedDebts implements LoadSimplifiedDebts {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadSimplifiedDebts.Model[]>
  ) {}

  async load (): Promise<LoadSimplifiedDebts.Model[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    })
    const remoteSimplifiedDebts = httpResponse.body || []
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return remoteSimplifiedDebts.map(remoteSimplifiedDebt => ({
        ...remoteSimplifiedDebt
      }))
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadSimplifiedDebts {
  export type Model = RemoteSimplifiedDebtsModel
}
