import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private type_: EnergyType;
  private static archetypeInstances = 0;

  constructor(name:string) {
    super(name);
    this.type_ = 'stamina';
    Ranger.archetypeInstances += 1;
  }

  get type(): EnergyType {
    return this.type_;
  }

  static createdArchetypeInstances():number {
    return Ranger.archetypeInstances;
  }

  get energyType(): EnergyType {
    return this.type_;
  }
}