import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://localhost:3000/api/register', this.user)
      .subscribe(response => {
        console.log('User registered', response);
      });
  }
}
