import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse} from '@angular/common/http';

import {catchError} from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
   
  loggedInFlag:boolean = false;
  
  getLogin(user:any){
     
   
  return  this.http.post<any>("http://10.60.62.70:8009/api/login", JSON.stringify(user))
  .pipe(
    catchError(this.errorHandle)
    )
  }

  errorHandle(err:HttpErrorResponse){
      
        return throwError(err)
  }

  isLoggedIn(flag:boolean){  
     this.loggedInFlag = flag;
  }
  

}
