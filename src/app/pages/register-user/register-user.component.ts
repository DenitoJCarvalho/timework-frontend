import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

import { MenuComponent } from '../../components/menu/menu.component';
import { FooterComponent } from '../../components/footer/footer.component';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MenuComponent, FooterComponent
  ],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {

  private userService = inject(UserService);
  userType: string = 'user';

  formRegister = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(3)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    enterprise: new FormControl('', [
      Validators.required,
      Validators.maxLength(40)
    ]),
    userType: new FormControl(this.userType)
  });

  registerUser() {
    if (this.formRegister.value) {
    } else {
      console.log("Dados inválidos.")
    }
  }

}
