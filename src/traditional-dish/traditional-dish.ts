import { ITraditionalDish } from '../shared/interfaces/traditional-dish.interface';
import { DishesTypes } from '../shared/enums/dishes-types';

export class TraditionalDish implements ITraditionalDish {
  name: string;
  country: string;
  cookedAt: Date;

  constructor(type: DishesTypes, country: string) {
    this.name = String(type);
    this.country = country;
    this.cookedAt = new Date();
  }

  toString() {
    return `${this.country} Traditional Dish: ${
      this.name
    }\nCooked at ${this.cookedAt.toISOString()}\n`;
  }
}
