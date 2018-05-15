import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	user_destination: any;
	user_date: any;
	user_time: any;

  constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController) {

  }

  ionViewDidLoad() {


  }

  sendBookings() {
  	let loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    loader.present();

  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');

  	let body = {
  		user: "Jomark Tandog",
  		start_date: this.user_date,
  		start_time: this.user_time,
  		end_date: "n/a",
  		end_time: "n/a",
  		place: this.user_destination,
  		status: "0",
  		cancel: "0",
  		total_cost: "0",
  		total_hours: "0",
  		node: "0"
  	}

  	console.log(body);

  	this.http.post('http://localhost:3000/bookings', JSON.stringify(body), {headers: headers})
  		.map(res => res.json())
  		.subscribe(data => {
  			console.log(data);
  			loader.dismiss();
  		});
  }



}
