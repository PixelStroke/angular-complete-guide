import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IIngredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<{name: string, amount: number}>();
  @Output() ingredientRemoved = new EventEmitter<{name: string, amount: number}>();
  name: string = '';
  amount: number = 0;

  constructor() { }

  ngOnInit(): void { }

  addIngredient(form: NgForm) {
    console.log(form.value);
    let newIngredient: IIngredient = {name: form.value.name, amount: form.value.amount}
    this.ingredientAdded.emit(newIngredient);
  }

  onIngredientClear() {
    this.name = '';
    this.amount = 0;
  }

  onIngredientRemoved() {

  }
}
