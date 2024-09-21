import { Worker } from "@plane/resources/worker";

export interface PlaneClient {
  apiKey: string;
  organizationId: string;
}

export class Plane {
  constructor(private _: PlaneClient) {}
  worker = new Worker(this._);
}
