import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, HeaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  onSubmit() {
    console.log('Form submitted');
    alert('Message envoyé (simulé) !');
  }
}
