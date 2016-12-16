import { Component, OnInit } from '@angular/core';
import { ResultsService } from './results.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public restaurants = [];
  public restaurantDetails;
  public location = {};
  constructor(private resultsService: ResultsService) { }
  public showInstructions: boolean = true;
  public restuarantSelected: boolean = false;
  public choice: string = '';

  ngOnInit() {
    if(navigator.geolocation) {
      this.getPosition();
    }
  }

  public getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this), this.errorCallBack);
    }
  }

  private errorCallBack() {
    console.log('Blocked')
  }

  public setPosition(position) {
    this.location = position.coords;
    this.callGoogle(position.coords.latitude, position.coords.longitude);
  }

  public callGoogle(latitude, longitude) {
    this.resultsService.getPlaces(latitude, longitude)
      .subscribe(
      (results) => {
        this.restaurants = results;
      }
      );
  }

 /* public clickedPlace(place_id) {
    this.restaurantDetails = "";
    this.resultsService.getPlaceDetails(place_id)
      .subscribe(
      (results) => {
        this.restaurantDetails = results;
        console.log('results', results.result);
      }
      );
  }*/
  public removeChoice(index) {
    this.restaurants.splice(index, 1);
  }

  public chooseRestuarant() {
    let winner = this.restaurants[Math.floor(Math.random() * this.restaurants.length)];
    this.resultsService.getPlaceDetails(winner.place_id)
      .subscribe(
      (results) => {
        this.restaurantDetails = results.result;
        this.restuarantSelected = true;
      }
      );
  }

}
