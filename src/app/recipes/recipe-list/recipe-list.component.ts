import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Quiche', 'Made out of pure Egg Whites', 'https://images-gmi-pmc.edge-generalmills.com/17dffca0-7f96-4d69-8ce0-fb88830b543e.jpg'),
    // tslint:disable-next-line:max-line-length
    new Recipe('Pancake', 'Made out of Egg and Flour', 'https://www.ihop.com/-/media/ihop/npd/2018/img/npd_2018_pancakes.jpg?h=1228&w=1528&hash=DBA81664F656866E2CA50CB6EDE0C91B5A24FFF6')
  ];

  constructor() { }

  ngOnInit() {
  }

}
