import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  userDetails:any = ""

  constructor(private router:Router){
      if(window.localStorage.getItem('username')){
      this.userDetails = window.localStorage.getItem('username')
      }else{
        this.router.navigate(['loginPage'])
      }
  }



  ngOnInit(): void {

  }

}
