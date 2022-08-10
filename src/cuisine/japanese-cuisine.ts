import { Cuisine } from './cuisine';
import { DishesTypes } from '../shared/enums/dishes-types';

export class JapaneseCuisine extends Cuisine {
  constructor() {
    super();
    this.country = 'Japan';
    this.menu = [DishesTypes.RISE, DishesTypes.FISH, DishesTypes.TEA];
  }
}
