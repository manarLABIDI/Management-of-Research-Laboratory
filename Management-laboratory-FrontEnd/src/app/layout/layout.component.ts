import { Component, NgZone, OnInit } from '@angular/core';
import {AuthService} from '../services/AuthService'
import {  Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent  implements OnInit {

 constructor(private AuthSer: AuthService, private router:Router, private ngZone: NgZone){}
  user:any;
  ngOnInit(){
    //traja3li u  wena nafectih f variable user
    this.AuthSer.getUserClaims().then( (u)=>{
      this.user = u ??null;
      console.log(this.user.displayName);
      console.log(this.user.photoURL);
    })
    
  }

  trylogout(): void{
    this.AuthSer.doLogout().then (()=> {
      this.router.navigate(['/login'])
       
      
   })

  }

}
