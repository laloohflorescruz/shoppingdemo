import { Component, OnInit, Output, EventEmitter } from '@angular/core';
 import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test',
    'Hola',
    'https://www.cocinadominicana.com/wp-content/uploads/2010/12/croqueta-de-pollo-ClaraGon3245-600x900.jpg'),
    new Recipe('Un rico burger',
    'Burger',
    'https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg')
  ];

  constructor() { }

  ngOnInit()  {

  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
