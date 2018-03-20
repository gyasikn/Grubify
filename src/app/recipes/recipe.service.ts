import { Recipe } from './recipe.model';

export class RecipeService {
  
  private recipes: Recipe[] = [
     new Recipe("Awesome Recipe WOW", "Just Amazing...", "http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg"),
     new Recipe("Much Recipe wow", "omg delisshhh...", "http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg"),
     new Recipe("Food Even Better Wow", "finger licking good...", "http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg")
   ];

   getRecipes() {
     return this.recipes.slice();
     // returns a new array which is an exact copy of the service file array
   }

}