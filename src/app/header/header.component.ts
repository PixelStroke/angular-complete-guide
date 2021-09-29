import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Output('featureSelected') feature = new EventEmitter<{showRecipeList: boolean, showShoppingList: boolean}>();
  showRecipeList = true;
  showShoppingList = false;

  constructor () {}

  ngOnInit(): void { }

  togglePage(): void {

  }

  emitEvent(): void {
    this.feature.emit({
      showRecipeList: this.showRecipeList,
      showShoppingList: this.showShoppingList
    });
  }

  onRecipeListDisplayed(): void {
    if (this.showRecipeList === true) return;
    this.showRecipeList = true;
    this.showShoppingList = false;
    this.emitEvent();
  }

  onShoppingListDisplayed(): void {
    if (this.showShoppingList === true) return;
    this.showRecipeList = false;
    this.showShoppingList = true;
    this.emitEvent();
  }
}
