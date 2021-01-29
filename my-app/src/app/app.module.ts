import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddrecComponent } from './addrec/addrec.component';
import { MainComponent } from './main/main.component';
import { HeadComponent } from './head/head.component';
import { RecipeComponent } from './recipe/recipe.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipesComponent } from './recipes/recipes.component';
import { MyrecComponent } from './myrec/myrec.component';
import { R1Component } from './recipes/r1/r1.component';
import { R2Component } from './recipes/r2/r2.component';
import { R3Component } from './recipes/r3/r3.component';
import { R4Component } from './recipes/r4/r4.component';

@NgModule({
  declarations: [
    AppComponent,
    AddrecComponent,
    MainComponent,
    HeadComponent,
    RecipeComponent,
    RecipesComponent,
    MyrecComponent,
    R1Component,
    R2Component,
    R3Component,
    R4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
