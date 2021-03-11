import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { DeleteDebt, LoadDebtList } from '@/domain/usecases'
import { UnexpectedError } from '@/domain/errors'

export class RemoteDeleteDebt implements DeleteDebt {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadDebtList.Model>
  ) {}

  async delete (id: string): Promise<void> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${id}`,
      method: 'delete'
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.serverError: throw new UnexpectedError()
    }
  }
}

export namespace RemoteDeleteDebt {
  export type Model = LoadDebtList
}
