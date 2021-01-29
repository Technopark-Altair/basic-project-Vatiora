import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/models/rec.module';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  @Input() recInput: Recipe;

  recipe: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

}