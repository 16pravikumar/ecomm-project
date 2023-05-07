import { Component, NgModule } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  constructor(private seller:SellerService,private router:Router){

  } showLogin=false
  ngOnInit():void{
    this.seller.reloadSeller()
  }
  signUp(data:SignUp):void{
    //console.warn(data);
    this.seller.userSignUp(data)
  }
  openSignUp(){
     this.showLogin=false
  }
  openLogin(){
    this.showLogin=true
 }
}
