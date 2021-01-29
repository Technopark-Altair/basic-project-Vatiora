import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RecipesComponent } from './recipes/recipes.component';
import { MyrecComponent } from './myrec/myrec.component';
import { R1Component } from './recipes/r1/r1.component';
import { R2Component } from './recipes/r2/r2.component';
import { R3Component } from './recipes/r3/r3.component';
import { R4Component } from './recipes/r4/r4.component';
import { AddrecComponent } from './addrec/addrec.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes =
[
  {path: "", component: MainComponent},
  {path: "app-main", component: MainComponent},
  {path: "app-recipes", component: RecipesComponent},
  {path: "app-myrec", component: MyrecComponent},
  {path: "app-r1", component: R1Component},
  {path: "app-r2", component: R2Component},
  {path: "app-r3", component: R3Component},
  {path: "app-r4", component: R4Component},
  {path: "app-add", component: AddrecComponent},
  {path: "app-recipe", component: RecipeComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:
  [
    RouterModule
  ]
})
export class AppRoutingModule { }