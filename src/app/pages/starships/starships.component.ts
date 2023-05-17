import { Component } from '@angular/core';
import {Starship} from "../../shared/model/starship";
import {StarshipService} from "../../services/starship.service";

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent {
  starships:Starship[] = [];
  constructor(private starshipService:StarshipService) {
  }

  ngOnInit(){
    this.getShips();
  }
  getShips(url:string = 'https://swapi.dev/api/starships'){
    this.starshipService.getStarships(url).then(data => data.subscribe((data:any) => {
      let results: Starship[] = data.results as Starship[];
      if(results){
        console.log("Got results for: " + url);
        for (const result of results) {
          this.starships.push(result);
        }
      }
      let nextPage = data.next;
      console.log(nextPage);
      if(nextPage != null){
        this.getShips(nextPage);
      }
    }));
  }
}
