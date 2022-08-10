import { Cuisine } from './cuisine';
import { DishesTypes } from '../shared/enums/dishes-types';

export class UkrainianCuisine extends Cuisine {
  constructor() {
    super();
    this.country = 'Ukraine';
    this.menu = [DishesTypes.BORSCH, DishesTypes.ZRAZI, DishesTypes.UZVAR];
  }
}
