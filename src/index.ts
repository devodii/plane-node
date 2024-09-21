export interface PlaneClient {
  apiKey: string;
  organizationId: string;
}

export class Plane {
  constructor(protected _: PlaneClient) {}
}
