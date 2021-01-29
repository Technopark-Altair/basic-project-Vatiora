import { Injectable } from '@angular/core';
import { Recipe } from 'src/models/rec.module';

@Injectable({
  providedIn: 'root'
})
export class RecipeservService {

  rec: Array<Recipe> =
  [

  ];
  constructor() { }
  getRecipes()
  {
    return this.rec;
  }

  getRecipe(id: number)
  {
    return this.rec.find((el) => el.id === id);
  }

  addRecipe(recipe: Recipe)
  {
    recipe.id = this.getRecipes().length;
    this.rec.push(recipe);
  }
}