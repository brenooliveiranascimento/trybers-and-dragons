import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private type_: EnergyType;
  private static archetypeInstances = 0;

  constructor(name:string) {
    super(name);
    this.type_ = 'mana';
    Necromancer.archetypeInstances += 1;
  }

  get type(): EnergyType {
    return this.type_;
  }

  static createdArchetypeInstances():number {
    return Necromancer.archetypeInstances;
  }

  get energyType(): EnergyType {
    return this.type_;
  }
}