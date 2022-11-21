import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private type_: EnergyType;
  private static archetypeInstances = 0;

  constructor(name:string) {
    super(name);
    this.type_ = 'mana';
    Mage.archetypeInstances += 1;
  }

  get type(): EnergyType {
    return this.type_;
  }

  static createdArchetypeInstances():number {
    return Mage.archetypeInstances;
  }

  get energyType(): EnergyType {
    return this.type_;
  }
}