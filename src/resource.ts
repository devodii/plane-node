const makeHeaders = () => ({
  "Content-Type": "application/json",
  // todo
  "x-api-key": "null",
});

export class APIResource {
  _client = {
    // todo
    baseUrl: "baseurl",

    async get<T>(
      endpoint: string,
      option?: Omit<RequestInit, "method">
    ): Promise<T> {
      return await fetch(`${this.baseUrl}/${endpoint}`, {
        method: "GET",
        ...option,
        ...makeHeaders(),
      }).then((res) => {
        if (res.ok) return res.json();
        else throw new Error(res.statusText);
      });
    },

    async post<T>(
      endpoint: string,
      option?: Omit<RequestInit, "method">
    ): Promise<T> {
      return await fetch(`${this.baseUrl}/${endpoint}`, {
        method: "POST",
        ...option,
        ...makeHeaders(),
      }).then((res) => {
        if (res.ok) return res.json();
        else throw new Error(res.statusText);
      });
    },

    async delete<T>(
      endpoint: string,
      option?: Omit<RequestInit, "method">
    ): Promise<T> {
      return await fetch(`${this.baseUrl}/${endpoint}`, {
        method: "DELETE",
        ...option,
        ...makeHeaders(),
      }).then((res) => {
        if (res.ok) return res.json();
        else throw new Error(res.statusText);
      });
    },
  };
}
