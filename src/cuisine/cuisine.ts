import { ICuisine } from '../shared/interfaces/cuisine.interface';
import { DishesTypes } from '../shared/enums/dishes-types';
import { ITraditionalDish } from '../shared/interfaces/traditional-dish.interface';
import { TraditionalDish } from '../traditional-dish/traditional-dish';
import { ILunch } from '../shared/interfaces/lunch.interface';
import { Lunch } from '../lunch/lunch';

export abstract class Cuisine implements ICuisine {
  country: string;

  cookLunch(): ILunch {
    return new Lunch(
      [
        ...this.getMenu().map(
          (dish: DishesTypes) => new TraditionalDish(dish, this.country),
        ),
      ],
      this.country,
    );
  }

  cookTraditionalDish(dishType: DishesTypes): ITraditionalDish | null {
    if (this.getMenu().includes(dishType)) {
      return new TraditionalDish(dishType, this.country);
    } else {
      return null;
    }
  }

  getMenu(): Array<DishesTypes> {
    return [];
  }
}
