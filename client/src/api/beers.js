export class BeerApi {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async getBeers() {
    return this.apiClient.get("/beers");
  }
}
