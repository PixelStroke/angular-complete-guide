import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showRecipeList = true;
  showShoppingList = false;

  onNavigate(pageList: {showRecipeList: boolean, showShoppingList: boolean}) {
    this.showRecipeList = pageList.showRecipeList;
    this.showShoppingList = pageList.showShoppingList;
  }
}
