import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router,private service:AuthService) {
       window.localStorage.removeItem('username');
       this.service.isLoggedIn(false)
       this.router.navigate(['loginPage'])
   }

  ngOnInit(): void {


  }

}
