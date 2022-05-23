import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();


  recipes: Recipe[] = [
    new Recipe('A test',
    'Hola',
    'https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg', [
      new Ingredient('Meat', 1),
      new Ingredient('Meats',3)
    ]),
    new Recipe('Un rico burger',
    'Burger',
    'https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg',
    [
      new Ingredient('Ketchup', 10),
      new Ingredient('Banana', 8)
    ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
