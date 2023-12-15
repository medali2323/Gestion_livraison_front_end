import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GestionLivraisonServiceService } from 'src/app/service/gestion-livraison-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  constructor(private authService: GestionLivraisonServiceService,private router: Router) { }

  onSubmit(f:NgForm){
    console.log('Username:', f.value.email);
    console.log('Password:', f.value.Password);
    const loginData = {
      email:f.value.email,
      password: f.value.password
    };
    this.authService.login(loginData).subscribe(
      (response) => {
        console.log('Login successful:', response);
        this.router.navigate(['/expediteur/dashboard']);

      },
      (error) => {
        console.error('Login error:', error);
      }
    );
  }
}
