import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signin',
  standalone: true,
  templateUrl: './signin.component.html',
  imports: [CommonModule]
})
export class SigninComponent {
  user = {
    email: '',
    password: ''
  };

  constructor(private http: HttpClient) {}

  onLogin() {
    this.http.post('http://localhost:3000/api/signin', this.user)
      .subscribe(response => {
        console.log('User signed in', response);
      });
  }
}
