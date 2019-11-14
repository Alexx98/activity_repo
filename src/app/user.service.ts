import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private url:String = "http://localhost:80";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  getUsers(): Observable <any>{
    return this.http.get<any>(
      this.url+"/users",
    )
  }

  getUser(_id): Observable <any>{
    return this.http.get<any>(
      this.url+"/user/" + _id,
    )
  }
  
  addUser(user): Observable <any>{
    return this.http.post<any>(
      this.url + "/user",
      user,
      {headers:this.headers}
    )
  }

  updateUser(user): Observable <any>{
    return this.http.put<any>(
      this.url + "/user/" + user._id,
      user,
      {headers:this.headers}
    )
  }

  deleteUser(_id): Observable <any>{
    return this.http.delete<any>(
      this.url + "/user/" + _id
    );
  }

}
