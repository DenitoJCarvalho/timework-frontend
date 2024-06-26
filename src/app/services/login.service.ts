import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { environment } from '../../environments/environments';

import { IUser } from '../interfaces/iuser';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private local = environment;
  private http = inject(HttpClient);

}
