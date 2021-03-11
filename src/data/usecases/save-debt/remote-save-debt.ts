import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { SaveDebt } from '@/domain/usecases'
import { UnexpectedError } from '@/domain/errors'

export class RemoteSaveDebt implements SaveDebt {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteSaveDebt.Model>
  ) {}

  async save (params: SaveDebt.Params): Promise<SaveDebt.Model> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${params.id}`,
      method: 'put',
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.badRequest: return httpResponse.body
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteSaveDebt {
  export type Model = SaveDebt.Model
}
