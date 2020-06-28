import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8000/';
  token  = 'Token 709953ede64deaa0532b5b1ce66c5e35fa9f730a';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.token);

  constructor(private http: HttpClient) { }

  getAllMembers() : Observable<any> {
    return this.http.get(this.baseUrl + 'members/',
    {headers: this.httpHeaders }
    );
  };

  getMember(id) : Observable<any> {
    return this.http.get(this.baseUrl + 'members/' + id  + '/',
    {headers: this.httpHeaders }
    );
  };

  saveNewMember(member) : Observable<any> {
    return this.http.post(this.baseUrl + 'members/', member,
    {headers: this.httpHeaders }
    );
  };

}
