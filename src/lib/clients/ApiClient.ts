
class ApiClient {
  private baseURL: string | undefined;
  private defaultHeaders: Record<string, string>;

  constructor() {
    this.baseURL = process.env.REACT_APP_API_URL;
    this.defaultHeaders = {
      "Content-Type": "application/json",
    };
  }

  async get<T>(url: string): Promise<T> {
    const response = await fetch(`${this.baseURL}${url}`, {
      method: 'GET',
      headers: this.defaultHeaders,
    });
    return response.json() as Promise<T>;
  }

  async post<T>(url: string, body: any): Promise<T> {
    const response = await fetch(`${this.baseURL}${url}`, {
      method: 'POST',
      headers: this.defaultHeaders,
      body: JSON.stringify(body),
    });
    return response.json() as Promise<T>;
  }

  async put<T>(url: string, body: any): Promise<T> {
    const response = await fetch(`${this.baseURL}${url}`, {
      method: 'PUT',
      headers: this.defaultHeaders,
      body: JSON.stringify(body),
    });
    return response.json() as Promise<T>;
  }

  async patch<T>(url: string, body: any): Promise<T> {
    const response = await fetch(`${this.baseURL}${url}`, {
      method: 'PATCH',
      headers: this.defaultHeaders,
      body: JSON.stringify(body),
    });
    return response.json() as Promise<T>;
  }

  async delete<T>(url: string): Promise<T> {
    const response = await fetch(`${this.baseURL}${url}`, {
      method: 'DELETE',
      headers: this.defaultHeaders,
    });
    return response.json() as Promise<T>;
  }
}

const client = new ApiClient();

export {
  client as ApiClient,
}