import { Observable } from "rxjs/Rx";
import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';


@Injectable() export class ResultsService {
    constructor(private http: Http) { }
    public results: any;
    private apiKey: string = '&key=AIzaSyBMOF7wD0ePMimkRwUZVciyfGqft9yTDHY';

    getPlaces(latitude, longitude) {
        /*const address: string = 'https://maps.googleapis.com/maps/api/place/textsearch/json?'+
        'query=restaurants&'+
        'location='+latitude+','+longitude+
        this.apiKey;
        console.log(address)
        return this.http.get(address)
            .map((response: Response) => {
                const results = response.json().results;
                console.log('service', results);
                return response.json();
                //return results;
            })
            .catch((error: Response) => Observable.throw(error.json()));*/
        let location = latitude + ',' + longitude;
        return this.http.get('http://localhost:3000/restaurants?location=' + location)
            .map((response: Response) => {
                const results = response.json().results;
                return results;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getPlaceDetails(place_id) {
        return this.http.get('http://localhost:3000/restaurant-id?placeId=' + place_id)
            .map((response: Response) => {
                //console.log('service', response);
                //const results = response.json().obj;
                return response.json();
                //return results;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }
}





/*
https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants&key=AIzaSyBMOF7wD0ePMimkRwUZVciyfGqft9yTDHY

https://maps.googleapis.com/maps/api/place/search/json?location=-27.2531166,138.8655664&radius=1000&sensor=false&key=AIzaSyBMOF7wD0ePMimkRwUZVciyfGqft9yTDHY

*/
