import { Cuisine } from './cuisine';
import { DishesTypes } from '../shared/enums/dishes-types';

export class AmericanCuisine extends Cuisine  {
  constructor() {
    super();
    this.country = 'USA';
    this.menu = [DishesTypes.SALAD, DishesTypes.BURGER, DishesTypes.COCA_COLA];
  }
}
