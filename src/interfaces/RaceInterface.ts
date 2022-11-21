export interface RaceInterface {
  name: string;
  dexterity: number;
  createdRacesInstances: () => number;
  maxLifePoints: () => number;
}