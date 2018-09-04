import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredients} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Quiche',
                'Made out of pure Egg Whites',
                'https://images-gmi-pmc.edge-generalmills.com/17dffca0-7f96-4d69-8ce0-fb88830b543e.jpg',
                [
                  new Ingredients('Egg Whites', 3),
                  new Ingredients('Bread', 2)
                ]),
    // tslint:disable-next-line:max-line-length
    new Recipe('Pancake',
      'Made out of Egg and Flour',
      'https://www.ihop.com/-/media/ihop/npd/2018/img/npd_2018_pancakes.jpg?h=1228&w=1528&hash=DBA81664F656866E2CA50CB6EDE0C91B5A24FFF6',
      [
        new Ingredients('Eggs', 3),
        new Ingredients('Flour', 500)
      ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredients[]) {
    this.slService.addIngredients(ingredients);
  }

}
