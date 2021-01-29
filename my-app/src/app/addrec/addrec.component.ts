import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/models/rec.module';

@Component({
  selector: 'app-addrec',
  templateUrl: './addrec.component.html',
  styleUrls: ['./addrec.component.css']
})
export class AddrecComponent implements OnInit {

  recipe: Recipe;
  @Output() addNewRec = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
    this.recipe = new Recipe();
  }

  AddInArray()
  {
    this.addNewRec.emit(this.recipe);
    this.recipe = new Recipe();
  }

}