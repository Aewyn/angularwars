import { Component } from '@angular/core';
import {Person} from "../../shared/model/person";
import {PeopleService} from "../../services/people.service";
import {Starship} from "../../shared/model/starship";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
  people: Person[] = [];
  constructor(private peopleService:PeopleService) {
  }

  ngOnInit(){
    this.getPeople();
  }

  getPeople(url:string = 'https://swapi.dev/api/people'){
    this.peopleService.getPeople(url).then(data => data.subscribe((data:any) => {
      let results: Person[] = data.results as Person[];
      if(results){
        console.log("Got results for: " + url);
        for (const result of results) {
          this.people.push(result);
        }
      }
      let nextPage = data.next;
      console.log(nextPage);
      if(nextPage != null){
        this.getPeople(nextPage);
      }
    }));
  }
}
