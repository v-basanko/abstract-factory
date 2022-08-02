import { ICuisine } from '../shared/interfaces/cuisine.interface';
import { Cuisine } from './cuisine';
import { DishesTypes } from '../shared/enums/dishes-types';

export class JapaneseCuisine extends Cuisine implements ICuisine {
  constructor() {
    super();
    this.country = 'Japan';
  }

  getMenu(): Array<DishesTypes> {
    return [DishesTypes.RISE, DishesTypes.FISH, DishesTypes.TEA];
  }
}
