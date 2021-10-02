import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IRecipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<IRecipe>();

  recipes: IRecipe[] = [
     {name: "Easy Breakfast",
      description: "New method of making breakfast.",
      imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOMDTdUnZn4oASyLuCOgMv0st2U3BCcfoodA&usqp=CAU"},
      {name: "Difficult Breakfast",
      description: "New method of making breakfast.",
      imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOMDTdUnZn4oASyLuCOgMv0st2U3BCcfoodA&usqp=CAU"}
  ];

  constructor() { }

  log(msg) {
    console.log(msg);
  }

  onRecipeSelected(recipe: IRecipe) {
    this.recipeSelected.emit(recipe);
  }

  ngOnInit(): void {
  }

}
