import { ILunch } from './lunch.interface';
import { ITraditionalDish } from './traditional-dish.interface';
import { DishesTypes } from '../enums/dishes-types';

export interface ICuisine {
  getMenu: () => Array<DishesTypes>;
  cookLunch: () => ILunch;
  cookTraditionalDish: (type: DishesTypes) => ITraditionalDish | null;
}
