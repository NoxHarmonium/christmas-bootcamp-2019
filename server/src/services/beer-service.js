export class BeerService {
  constructor(BeerModel) {
    this.BeerModel = BeerModel;
  }

  async getBeers() {
    return this.BeerModel.find({});
  }

  async createBeer(beer) {
    var beerModel = new this.BeerModel(beer);
    const result = await beerModel.save();
    return result;
  }

  async editBeer(id, updatedbeer) {
    const beer = await this.BeerModel.findById(id);
    return beer.update(updatedbeer);
  }
}
