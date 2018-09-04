import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredients } from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-edit-shopping-list',
  templateUrl: './edit-shopping-list.component.html',
  styleUrls: ['./edit-shopping-list.component.css']
})
export class EditShoppingListComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('quantityInput') quantityInput: ElementRef;


  constructor(private slSerice: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient() {
    const ingName = this.nameInput.nativeElement.value;
    const ingQuant = this.quantityInput.nativeElement.value;
    const newIngredient = new Ingredients(ingName, ingQuant);
    this.slSerice.addIngredient(newIngredient);
  }

}
