export class BeerApi {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async getBeers() {
    return this.apiClient.get("/beers");
  }
  
  async postBeer(beer) {
    return this.apiClient.post("/beers", beer);
  }
}

