import { MainComponent } from './main/main.component';
import { RecipeComponent } from './recipe/recipe.component';
import { AddrecComponent } from './addrec/addrec.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =
[
  {path: "", component: MainComponent},
  {path: "app-main", component: MainComponent},
  {path: "app-recipe", component: RecipeComponent},
  {path: "app-addrec", component: AddrecComponent}
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
