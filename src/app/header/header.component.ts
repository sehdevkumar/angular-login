import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  login_logout = false

  constructor(private service:AuthService) {
        
    
       
    
               if(window.localStorage.getItem('username') || service.loggedInFlag){
                   this.login_logout = true 
               }else{
                   this.login_logout = false
               }

               console.log(this.login_logout)
   
   
         
   }

  ngOnInit(): void {
  }

}
