import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the ServerBookingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServerBookingsProvider {

  constructor(public http: Http) {
    console.log('Hello ServerBookingsProvider Provider');
  }

  getBookingData() {

  	this.http.get('http://localhost:3000/bookings').map(res => res.json()).subscribe(data => {
  		console.log(data);
  	});

  }

}
