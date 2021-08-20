import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  


  constructor(private _auth:AuthService,private router:Router){
      if(localStorage.getItem('username')){
         this.router.navigate(['homePage'])
      }
  }
  
  
  
    
    
  



  user={}

  Message: string=""
  statusCode:number=200;
  validFlag:boolean = false
 private username:string = ""
 private password:string = ""


  onSubmit(myform:NgForm) {
   
  this.username  = myform.value.username;
  this.password = myform.value.password; 
   
  
   if(!this.username || !this.password){
      
     this.Message = "Empty Fields!"

    return;
   }

    this.user = {
      username:this.username,
      password:this.password
    }
    
    this._auth.getLogin(this.user)
      .subscribe(res => {
       
        this.Message = "User LoggedIn"

        window.localStorage.setItem("username",JSON.stringify(this.username))
        
        this._auth.loggedInFlag = true;

        return this.router.navigate(['homePage'])
     


      }, err => {
       
       console.log(err.status) 

       this._auth.isLoggedIn(false)

        switch(err.status){
              case 404:

                this.Message = "User Does Not Exists!"
                break;

              case 403:
                this.Message = "Incorrect Credentials!"
                break;
              
              case 406:
                this.Message = "User Disabled!"
                break;

              case 500:
                this.Message = "Internal Error!"
                break;

              default:
                this.Message =  "Internal Error!"

        }

      })    
  }

  ngOnInit(): void {
      
  }
  

}
