import Energy from '../Energy';

export default abstract class Fighter {
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _energy: Energy;
  constructor(
    lifePoints: number,
    strength: number,
    defense: number,
    energy: Energy,
  ) {
    this._lifePoints = lifePoints;
    this._strength = strength;
    this._defense = defense;
    this._energy = energy;
  }

  abstract attack(enemy: Fighter): void;

  abstract special(enemy: Fighter): void;

  abstract levelUp(): void;

  abstract reciveDamage(): void;
}