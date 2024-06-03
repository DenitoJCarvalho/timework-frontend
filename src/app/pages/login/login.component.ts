import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MenuComponent } from '../../components/menu/menu.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    MenuComponent, FooterComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  error: boolean = false;

  constructor() { }

  ngOnInit(): void { }


}
