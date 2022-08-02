import { Restaurant } from './restaurant/restaurant';
import { CuisinesTypes } from './shared/enums/cuisines-types';
import { DishesTypes } from './shared/enums/dishes-types';

const run = () => {
  const restaurant = new Restaurant();
  const americanCuisine = restaurant.getCuisine(CuisinesTypes.AMERICAN);
  console.log(americanCuisine.cookLunch().toString());
  console.log(
    americanCuisine.cookTraditionalDish(DishesTypes.BURGER).toString(),
  );

  const japaneseCuisine = restaurant.getCuisine(CuisinesTypes.JAPANESE);
  console.log(japaneseCuisine.cookLunch().toString());
  console.log(japaneseCuisine.cookTraditionalDish(DishesTypes.FISH).toString());

  const ukrainianCuisine = restaurant.getCuisine(CuisinesTypes.UKRAINIAN);
  console.log(ukrainianCuisine.cookLunch().toString());
  console.log(
    ukrainianCuisine.cookTraditionalDish(DishesTypes.BORSCH).toString(),
  );
};

run();
