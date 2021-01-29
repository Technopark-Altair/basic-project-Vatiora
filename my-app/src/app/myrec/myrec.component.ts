import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/models/rec.module';
import { RecipeservService } from 'src/services/recipeserv.service';

@Component({
  selector: 'app-myrec',
  templateUrl: './myrec.component.html',
  styleUrls: ['./myrec.component.css']
})
export class MyrecComponent implements OnInit {

  recipes: Array<Recipe>;
  constructor(private recService: RecipeservService) { }

  ngOnInit(): void {
    this.recipes = this.recService.getRecipes(); 
  }

  addingNewRec(newRec: Recipe)
  {
    this.recService.addRecipe(newRec);
  }
}