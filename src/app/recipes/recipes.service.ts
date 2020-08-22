import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private _recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Wiener_Schnitzel.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Spaghetti_al_Pomodoro.JPG',
      ingredients: ['Spaguetti', 'Meat', 'Tomatoes']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this._recipes];
  }

  getRecipe(recipeId: string) {
    return {...this._recipes.find(recipe => {
      return recipe.id === recipeId
    })};
  }
}
