export default abstract class Race {
  protected _name: string;
  protected _dexterity: number;
  constructor(
    name: string,
    dexterity: number,
  ) {
    this._name = name;
    this._dexterity = dexterity;
  }

  name() {
    return this._name;
  }

  dexterity() {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}