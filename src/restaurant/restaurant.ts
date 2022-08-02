import { CuisinesTypes } from '../shared/enums/cuisines-types';
import { ICuisine } from '../shared/interfaces/cuisine.interface';
import { JapaneseCuisine } from '../cuisine/japanese-cuisine';
import { AmericanCuisine } from '../cuisine/american-cuisine';
import { UkrainianCuisine } from '../cuisine/ukrainian-cuisine';

export class Restaurant {
  cuisines: Map<CuisinesTypes, ICuisine> = new Map();

  constructor() {
    this.cuisines.set(CuisinesTypes.JAPANESE, new JapaneseCuisine());
    this.cuisines.set(CuisinesTypes.AMERICAN, new AmericanCuisine());
    this.cuisines.set(CuisinesTypes.UKRAINIAN, new UkrainianCuisine());
  }

  getCuisine(cuisineType: CuisinesTypes): ICuisine {
    return this.cuisines.get(cuisineType);
  }
}
