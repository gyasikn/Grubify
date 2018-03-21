import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
     new Recipe(
       "Awesome Recipe WOW", 
       "Just Amazing...", 
       "http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg", 
       [
         new Ingredient('Stuff', 1),
         new Ingredient('Shit', 10),
       ]),
     new Recipe(
       "Much Recipe wow", 
       "finger licking good...", 
       "http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg", 
       [
         new Ingredient('Boba', 5),
         new Ingredient('aBob', 6)
       ]),
   ];

   getRecipes() {
     return this.recipes.slice();
     // returns a new array which is an exact copy of the service file array
   }

}