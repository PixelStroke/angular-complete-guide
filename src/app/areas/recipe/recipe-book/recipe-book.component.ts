import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
  selectedRecipe: IRecipe;

  constructor() { }

  ngOnInit(): void {
  }
  selectRecipe(recipe: IRecipe) {
    this.selectedRecipe = recipe;
  }
}
