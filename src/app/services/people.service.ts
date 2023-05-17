import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private url: string = 'https://swapi.dev/api/people';
  constructor(private http: HttpClient) { }

  async getPeople(url:string = this.url) {
    console.log("Fetching from: " + url);
    return this.http.get(url);
  }
}
