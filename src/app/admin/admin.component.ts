import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  login = "admin";
  password = "admin";
  isAdmin = false;
  isPlacesEdit = false;
  isPhonesEdit = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSignIn(login: string, password: string){
    if(this.login == login)
      if(this.password == password){
        this.isAdmin = true;
      }
  }

  onPlacesEdit(){
    this.isPlacesEdit = true;
    this.isPhonesEdit = false;
  }

  onPhonesEdit(){
    this.isPhonesEdit = true;
    this.isPlacesEdit = false;
  }

  onSignOut(){
    this.isAdmin = false;
  }
}
