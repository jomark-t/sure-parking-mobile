import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	data: string;

  constructor(public navCtrl: NavController, public http: Http) {

  }

  ionViewDidLoad() {
  	this.loadBookings();
  }

  loadBookings() {
  	this.http.get('http://localhost:3000/bookings?q=Jomark')
  		.map(res => res.json())
  		.subscribe(data => {
  			this.data = JSON.parse(JSON.stringify(data));
  			console.log(JSON.stringify(data));
  		},err => {
  			console.log(err);
  		});
  }

}
