import Archetype from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race from './Races';

export default abstract class Character implements Fighter {
  private _name: string;
  private _race: string;
  private _archtype: Archetype;
  private _maxLifePoints: number;
  private _strength: number;
  private _race: Race;
  private _dexterity: number;
  private _energyy: Energy;
  constructor(name: string) {
    this._name = name;
  }
}
