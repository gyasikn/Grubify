import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      "Spaghetti & Meatballs",
      "Classic dish cooked in marinara",
      "https://hips.hearstapps.com/del.h-cdn.co/assets/17/39/2048x1365/gallery-1506456062-delish-spaghetti-meatballs.jpg?resize=768:*",
      [
        new Ingredient("Spaghetti (Box)", 2),
        new Ingredient("Ground Beef (Pounds)", 2),
        new Ingredient("Garlic (cloves)", 3),
        new Ingredient("Cilantro", 1)
      ]
    ),
    new Recipe(
      "Much Recipe wow",
      "finger licking good...",
      "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/11/teriyaki-salmon.jpg?itok=QUgpSYUv",
      [
        new Ingredient("Salmon Fillets", 2),
        new Ingredient("Bok Choy - bunches", 3),
        new Ingredient("Garlic (Cloves)", 3),
        new Ingredient("Sweet Chili Sauce (tbsp)", 1),
        new Ingredient("Honey (tbsp)", 1),
        new Ingredient("Sesame Oil (tsp)", 1)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
    // returns a new array which is an exact copy of the service file array
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients); // from shopping list service
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}