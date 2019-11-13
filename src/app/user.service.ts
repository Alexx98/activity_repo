// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { User } from './user';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   constructor(private http: HttpClient) { }

//   private url:String = "http://localhost:80";
//   private headers = new HttpHeaders().set('Content-Type', 'application/json');

//   getUsers():Observable<any>{
//     return this.http.get<User[]>(
//       this.url + "/user"
//     );
//   }

//   addUser(user: User):Observable<any>{
//     return this.http.post<any>(
//       this.url + "/user",
//       user,
//       {headers: this.headers}
//     );
//   }

//   updateUser(user):Observable<any>{
//     return this.http.put<any>(
//       this.url + "/user/" + user,
//       user,
//       {headers: this.headers}
//     );
//   }

//   deleteUser(user):Observable<User[]>{
//     return this.http.delete<User[]>(
//       this.url + "/user/" + user
//     );
//   }

// }
