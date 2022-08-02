import { ILunch } from '../shared/interfaces/lunch.interface';
import { ITraditionalDish } from '../shared/interfaces/traditional-dish.interface';

export class Lunch implements ILunch {
  dishes: Array<ITraditionalDish>;
  country: string;

  constructor(dishes: Array<ITraditionalDish>, country) {
    this.country = country;
    this.dishes = dishes;
  }

  toString() {
    return `${this.country} Lunch includes:\n${this.dishes
      .map((dish) => dish.toString())
      .join('')}\n`;
  }
}
