import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _type: EnergyType;
  private static archetypeInstances = 0;

  constructor(name:string) {
    super(name);
    this._type = 'stamina';
    Ranger.archetypeInstances += 1;
  }

  get type(): EnergyType {
    return this._type;
  }

  static createdArchetypeInstances():number {
    return Ranger.archetypeInstances;
  }

  get energyType(): EnergyType {
    return this._type;
  }
}