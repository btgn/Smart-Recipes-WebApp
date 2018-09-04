import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {Ingredients} from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsAdded = new EventEmitter<Ingredients[]>();

  private ingredients: Ingredients[] = [
    new Ingredients('Eggs', 4),
    new Ingredients('Bread', 1),
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientsAdded.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredients[]) {
    /*for (let ing of ingredients) {
      this.addIngredient(ing);
    }*/
    this.ingredients.push(...ingredients);
    this.ingredientsAdded.emit(this.ingredients.slice());
  }

}
