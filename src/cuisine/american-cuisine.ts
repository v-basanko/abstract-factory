import { ICuisine } from '../shared/interfaces/cuisine.interface';
import { Cuisine } from './cuisine';
import { DishesTypes } from '../shared/enums/dishes-types';

export class AmericanCuisine extends Cuisine implements ICuisine {
  constructor() {
    super();
    this.country = 'USA';
  }

  getMenu(): Array<DishesTypes> {
    return [DishesTypes.SALAD, DishesTypes.BURGER, DishesTypes.COCA_COLA];
  }
}
