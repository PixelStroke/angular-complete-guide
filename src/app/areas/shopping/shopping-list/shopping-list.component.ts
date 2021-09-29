import { Component, OnInit, Input } from '@angular/core';
import { IIngredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  @Input() ingredients: IIngredient[] = [
    {name: "Apple", amount: 3},
    {name: "Sugar", amount: 1}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredientData: IIngredient) {
    this.ingredients.push(ingredientData);
  }

  onIngredientRemoved(ingredientData: IIngredient) {

  }

}
