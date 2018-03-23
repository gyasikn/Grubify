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
      "Teriyaki Salmon Bok Choy",
      "Salmon dish with an Asian twist.",
      "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/11/teriyaki-salmon.jpg?itok=QUgpSYUv",
      [
        new Ingredient("Salmon Fillets", 2),
        new Ingredient("Bok Choy - bunches", 3),
        new Ingredient("Garlic (Cloves)", 3),
        new Ingredient("Sweet Chili Sauce (tbsp)", 1),
        new Ingredient("Honey (tbsp)", 1),
        new Ingredient("Sesame Oil (tsp)", 1)
      ]
    ),
    new Recipe(
      "Ceviche",
      "Traditional Peruvian Dish",
      "https://i1.wp.com/2driftingcoconuts.com/wp-content/uploads/2016/03/img_8286.jpg?fit=2400%2C1603",
      [
        new Ingredient("Tilapia Fillets", 5),
        new Ingredient("Red Onion", 1),
        new Ingredient("Sweet Corn", 1),
        new Ingredient("Limes", 10),
        new Ingredient("Sweet Potato", 1),
        new Ingredient("Cilantro", 1)
      ]
    ),
    new Recipe(
      "Arroz Con Pollo - Platter",
      "Traditional Spanish Cuisine",
      "https://fthmb.tqn.com/aSSXyxmIr7OGdBgWz8JvK1YG09o=/960x0/filters:no_upscale()/arroz-con-pollo-87997430-5691313e5f9b58eba48f3371.jpg",
      [
        new Ingredient("Chicken Breasts", 6),
        new Ingredient("Green Peas - One Bag", 1),
        new Ingredient("Yellow Rice (Cups)", 5),
        new Ingredient("Yellow Onion", 1),
        new Ingredient("Carrot", 2)
      ]
    ),
    new Recipe(
      "Empanadas - Chilean",
      "Traditional Chilean Style Empanadas",
      "https://mdixonp.files.wordpress.com/2016/05/empanada-chilena-ok-730x427.jpg",
      [
        new Ingredient("Ground Beef (lb)", 1),
        new Ingredient("Boiled Eggs", 4),
        new Ingredient("Onion", 1),
        new Ingredient("Black Olives (can)", 1),
        new Ingredient("Dough", 1),
        new Ingredient("Raisins (box)", 1)
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