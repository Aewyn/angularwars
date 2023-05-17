import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StarshipService {
  private url: string = 'https://swapi.dev/api/starships';
  constructor(private http: HttpClient) { }

  async getStarships(url:string = this.url) {
    console.log("Fetching from: " + url);
    return this.http.get(url);
  }
}
