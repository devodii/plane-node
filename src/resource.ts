import { Headers } from "@plane/core";

import * as Index from "@plane/index";

class APIResource extends Index.Plane {
  constructor(private client: Index.PlaneClient) {
    super(client);
  }

  baseUrl = "https://api.plane.com/v1";

  async get<T>(
    endpoint: string,
    option?: Omit<RequestInit, "method">
  ): Promise<T> {
    return await fetch(`${this.baseUrl}/${endpoint}`, {
      method: "GET",
      ...option,
      ...this.makeHeaders(),
    }).then((res) => {
      if (res.ok) return res.json();
      else throw new Error(res.statusText);
    });
  }

  async post<T>(
    endpoint: string,
    option?: Omit<RequestInit, "method">
  ): Promise<T> {
    return await fetch(`${this.baseUrl}/${endpoint}`, {
      method: "POST",
      ...option,
      ...this.makeHeaders(),
    }).then((res) => {
      if (res.ok) return res.json();
      else throw new Error(res.statusText);
    });
  }

  async delete<T>(
    endpoint: string,
    option?: Omit<RequestInit, "method">
  ): Promise<T> {
    return await fetch(`${this.baseUrl}/${endpoint}`, {
      method: "DELETE",
      ...option,
      ...this.makeHeaders(),
    }).then((res) => {
      if (res.ok) return res.json();
      else throw new Error(res.statusText);
    });
  }

  protected makeHeaders = (): Headers => {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.client.apiKey}`,
    };
  };
}

export class APIClient extends Index.Plane {
  constructor(private apiClient: Index.PlaneClient) {
    super(apiClient);
  }

  _client = new APIResource(this.apiClient);
}
