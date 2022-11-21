import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private type_: EnergyType;
  private static archetypeInstances = 0;

  constructor(name:string) {
    super(name);
    this.type_ = 'stamina';
    Warrior.archetypeInstances += 1;
  }

  get type(): EnergyType {
    return this.type_;
  }

  static createdArchetypeInstances():number {
    return Warrior.archetypeInstances;
  }

  get energyType(): EnergyType {
    return this.type_;
  }
}