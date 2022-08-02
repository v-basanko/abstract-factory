import { ITraditionalDish } from './traditional-dish.interface';

export interface ILunch {
  dishes: Array<ITraditionalDish>;
  country: string;
}
