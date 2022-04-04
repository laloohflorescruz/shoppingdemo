import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test', 'Hola','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cocinadominicana.com%2F35%2Fcroquetas-de-pollo&psig=AOvVaw06aU6XvuAij0tH8cG5v8Al&ust=1647024522676000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMCCx5GavPYCFQAAAAAdAAAAABAD')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
