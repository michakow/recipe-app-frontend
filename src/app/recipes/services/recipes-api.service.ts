import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipesApiService {
  private httpClient = inject(HttpClient);

  private url = '/api/recipes';

  getRecipes() {
    return this.httpClient.get(this.url);
  }

  getRecipe(id: string) {
    return this.httpClient.get(`${this.url}/${id}`);
  }

  createRecipe(recipe: any) {
    return this.httpClient.post(this.url, recipe);
  }

  updateRecipe(recipe: any) {
    return this.httpClient.patch(`${this.url}/${recipe.id}`, recipe);
  }

  deleteRecipe(id: string) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
