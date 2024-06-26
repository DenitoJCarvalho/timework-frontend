import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.api;
  private baseUrlUser = {
    create: `${this.baseUrl}User`,
    byId: `${this.baseUrl}User/:id`,
    update: `${this.baseUrl}User/:id`,
    updatePartial: `${this.baseUrl}User/:id`,
    delete: `${this.baseUrl}User/:id`
  };
  private http = inject(HttpClient);

  create() {

    console.log(this.baseUrlUser.create);
  }


}
