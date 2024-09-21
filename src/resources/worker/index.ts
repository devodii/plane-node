import * as Index from "@plane";
import { APIClient } from "@plane/resource";
import { Employment } from "./employment";
import { Reporting } from "./reporting";
import { Role } from "./role";

export class Worker extends APIClient {
  constructor(private client: Index.PlaneClient) {
    super(client);
  }

  employment = new Employment(this.client);
  role = new Role(this.client);
  reporting = new Reporting(this.client);
}
