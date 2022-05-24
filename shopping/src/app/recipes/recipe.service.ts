import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()
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

  constructor(private slService: ShoppingListService) {


  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);

  }
}
