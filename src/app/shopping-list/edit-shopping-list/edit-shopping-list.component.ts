import { Component, OnInit, EventEmitter, ViewChild, Output, ElementRef } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';

@Component({
  selector: 'app-edit-shopping-list',
  templateUrl: './edit-shopping-list.component.html',
  styleUrls: ['./edit-shopping-list.component.css']
})
export class EditShoppingListComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredients>();

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('quantityInput') quantityInput: ElementRef;


  constructor() { }

  ngOnInit() {
  }

  addIngredient() {
    const ingName = this.nameInput.nativeElement.value;
    const ingQuant = this.quantityInput.nativeElement.value;
    const newIngredient = new Ingredients(ingName, ingQuant);
    this.ingredientAdded.emit(newIngredient);
  }

}
