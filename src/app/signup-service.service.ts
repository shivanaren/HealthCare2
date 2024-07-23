import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupServiceService {

 
  constructor(private http: HttpClient) { }

  registerCoach(coach:any): Observable<any>{
    return this.http.post('http://localhost:3000/coaches',coach);
   
  }

  
  registerUser(user:any): Observable<any> {
    return this.http.post('http://localhost:3000/users',user);
  }
}

               