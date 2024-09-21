import * as Index from "@plane";
import { makeQueryParams, OverrideProps } from "@plane/core";
import { APIClient } from "@plane/resource";
import { Employment } from "./employment";
import { Reporting } from "./reporting";
import { Role } from "./role";
import { ListWorkersParameters, type Worker as IWorker } from "./shared";

export class Worker extends APIClient {
  constructor(private client: Index.PlaneClient) {
    super(client);
  }

  employment = new Employment(this.client);
  role = new Role(this.client);
  reporting = new Reporting(this.client);

  create = async (
    dto: OverrideProps<IWorker, { number?: string }>
  ): Promise<IWorker> => {
    return await this._client.post("/workers", { body: JSON.stringify(dto) });
  };

  list = async (dto: ListWorkersParameters): Promise<IWorker[]> => {
    return await this._client.get(`/workers?${makeQueryParams(dto)}`);
  };

  retrieve = async (id: string): Promise<IWorker> => {
    return await this._client.get(`/workers/${id}`);
  };

  invite = async (id: string): Promise<{ id: string }> => {
    return await this._client.get(`/workers/${id}/invite`);
  };
}
