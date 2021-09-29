import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './areas/shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './areas/shopping/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeBookComponent } from './areas/recipe/recipe-book/recipe-book.component';
import { RecipeListComponent } from './areas/recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './areas/recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './areas/recipe/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
