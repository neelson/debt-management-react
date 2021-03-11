import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { AddDebt } from '@/domain/usecases'
import { UnexpectedError } from '@/domain/errors'

export class RemoteAddDebt implements AddDebt {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteAddDebt.Model>
  ) {}

  async add (params: AddDebt.Params): Promise<AddDebt.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.badRequest: return httpResponse.body
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteAddDebt {
  export type Model = AddDebt.Model
}
