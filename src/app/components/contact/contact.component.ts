import { Component } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  constructor() { }

  sendEmail(e: Event) {
    e.preventDefault();

    const templateParams = {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message,
    };

    emailjs
      .send(
        'service_aqw1s94', // Service ID from EmailJS
        'template_erzqlrj', // Template ID from EmailJS
        templateParams,
        'Xr9wahiCxandk1t8k' // User ID from EmailJS
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
          // Clear the form
          this.name = '';
          this.email = '';
          this.subject = '';
          this.message = '';
        },
        (err) => {
          console.log('FAILED...', err);
          alert('Failed to send message, please try again.');
        }
      );
  }
}
