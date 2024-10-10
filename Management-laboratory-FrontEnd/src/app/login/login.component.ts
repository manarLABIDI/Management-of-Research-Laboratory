import { Component, NgZone, NgZoneOptions } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {AuthService} from '../services/AuthService'
import {  Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private AuthSer: AuthService, private router:Router, private ngZone: NgZone){}

  tryGoogleLoging() : void{

    this.AuthSer.doGoogleLogin().then (()=> {
       this.router.navigate(['/members'])
        this.succesRedirect();
       // this.ngZone.run(()=>{}) (elle  rend le focus chez app front apres avoir executer du code sur cloud)
    })

    


  }
  succesRedirect (): void {
    this.ngZone.run(()=>{
      this.router.navigate(['/members'])
    })

  }

}
