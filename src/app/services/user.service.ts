import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment.development';

import { IUser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private local = environment;
  private http = inject(HttpClient);

  create(user: IUser) {
    this.http.post<IUser>(this.local.postUser, user);
  }


}
