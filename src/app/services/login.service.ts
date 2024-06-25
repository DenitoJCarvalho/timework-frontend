import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private local = environment;
  private http = inject(HttpClient);


  addUser() {
    console.log(this.local.postUser);
  }
}
