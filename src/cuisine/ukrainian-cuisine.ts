import { ICuisine } from '../shared/interfaces/cuisine.interface';
import { Cuisine } from './cuisine';
import { DishesTypes } from '../shared/enums/dishes-types';

export class UkrainianCuisine extends Cuisine implements ICuisine {
  constructor() {
    super();
    this.country = 'Ukraine';
  }

  getMenu(): Array<DishesTypes> {
    return [DishesTypes.BORSCH, DishesTypes.ZRAZI, DishesTypes.UZVAR];
  }
}
