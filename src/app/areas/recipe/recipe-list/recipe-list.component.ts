import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: IRecipe[] = [
     {name: "Easy Breakfast",
      description: "New method of making breakfast.",
      imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOMDTdUnZn4oASyLuCOgMv0st2U3BCcfoodA&usqp=CAU"},
      {name: "Easy Breakfast",
      description: "New method of making breakfast.",
      imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOMDTdUnZn4oASyLuCOgMv0st2U3BCcfoodA&usqp=CAU"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
