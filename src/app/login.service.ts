import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

 getCoach(): Observable<any> {
      return this.http.get('http://localhost:3000/coaches')
      
  }

  getUser(): Observable<any> {
    return this.http.get('http://localhost:3000/users');
  }

}
