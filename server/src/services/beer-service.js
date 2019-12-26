export class BeerService {
  constructor(beerModel) {
    this.beerModel = beerModel;
  }

  async getBeers() {
    return this.beerModel.find({});
  }
}
