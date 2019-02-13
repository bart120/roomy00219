import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserStore } from 'src/app/stores/user-store.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import * as jwtDecode from 'jwt-decode';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
  .form-container {
    display: flex;
    flex-direction: column;
  }
  .form-container > * {
    width: 100%;
  }
  `]
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  login: string;
  password: string;

  constructor(private userStore: UserStore, private build: FormBuilder,
    private authService: AuthenticationService, private snack: MatSnackBar) {

    this.formLogin = build.group({
      login: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  formSubmit(values: any) {
    console.log(values);
    /*this.authService.login(values.mail, values.password).subscribe(
      (data) => {
        const token = data.token;
        const decoded = jwtDecode(token);
        console.log(decoded);
        // this.userStore.update({ mail: values.login, name: 'Bob' });
        this.snack.open('Vous êtes connecté.', 'OK', { duration: 4000 })
      },
      (err) => this.snack.open(`Erreur lors de l'authentification`, 'OK', { duration: 4000 })
    );*/

    this.userStore.update({ mail: values.login, name: 'Bob' });
    this.snack.open('Vous êtes connecté.', 'OK', { duration: 4000 });

  }

}
