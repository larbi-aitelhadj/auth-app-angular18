import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  projects = [
    {
      title: 'Site vitrine',
      description: 'Développement d’un site pour un client local.',
      imageUrl: '../../assets/images/comsurf.png',
      link: 'https://example.com/site-vitrine'
    },
    {
      title: 'App mobile',
      description: 'Application de gestion de tâches multiplateforme.',
      imageUrl: 'assets/images/comsurf.png',
      link: 'https://example.com/app-mobile'
    }
  ];

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
