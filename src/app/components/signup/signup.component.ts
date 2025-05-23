import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupData = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  onSubmit(): void {
    // Implement signup logic here
    console.log('Signup data:', this.signupData);
    this.router.navigate(['/login']);
  }
}
