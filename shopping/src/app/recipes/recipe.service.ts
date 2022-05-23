import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();


  recipes: Recipe[] = [
    new Recipe('A test',
    'Hola',
    'https://www.cocinadominicana.com/wp-content/uploads/2010/12/croqueta-de-pollo-ClaraGon3245-600x900.jpg'),
    new Recipe('Un rico burger',
    'Burger',
    'https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
