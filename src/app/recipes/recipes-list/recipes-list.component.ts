import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A new Recipe", "Test Recipe", "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"),
    new Recipe("A new Recipe 2", "Test Recipe 2", "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
