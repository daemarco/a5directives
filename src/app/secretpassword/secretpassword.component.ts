import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secretpassword',
  templateUrl: './secretpassword.component.html',
  styleUrls: ['./secretpassword.component.css']
})
export class SecretpasswordComponent implements OnInit {

  toggleSecretPassword: boolean = false;
  clicksTimeline = [];
  clicksCounter: number = 0;

  constructor() { 

  }

  ngOnInit() {
  }

  toggleDetails() {
    this.clicksCounter = this.clicksCounter + 1;
    this.toggleSecretPassword = !this.toggleSecretPassword;
    this.clicksTimeline.push({ "clickN": this.clicksCounter, "timestamp": Date.now()});
  }

}
