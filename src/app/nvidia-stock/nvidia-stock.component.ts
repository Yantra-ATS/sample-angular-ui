// Import necessary modules
import {Component, OnInit} from '@angular/core';
import {ExcelService} from '../services/excel.service';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../services/UserService';
interface Window {
  google: any; // or specify a more detailed type if needed
}
interface GoogleResponse {
  credential: string;  // The ID token or credential returned by Google
}

@Component({
  selector: 'app-nvidia-stock',
  templateUrl: './nvidia-stock.component.html',
  styleUrls: ['./nvidia-stock.component.css'],
  providers: [ExcelService,HttpClient] // Also provide any services if needed
})
export class NvidiaStockComponent implements OnInit  {
  constructor(private userService:UserService) {
  }

  ngOnInit(): void {
    this.loadGoogleScript();
  }

  loadGoogleScript(): void {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = () => this.initializeGoogleSignIn();
    document.head.appendChild(script);
  }

  initializeGoogleSignIn(): void {
    window.google.accounts.id.initialize({
      client_id: '146189544058-tmlr7e7bqml9lft2ap0i7jicrsk1c9mj.apps.googleusercontent.com',
      callback: (response: GoogleResponse) => this.handleCredentialResponse(response)
    });
    window.google.accounts.id.renderButton(
      document.getElementById("google-signin-button"),
      { theme: "outline", size: "large" }
    );
  }
  redirectToGoogleAuth() {
    window.location.href = 'http://localhost:8080/oauth2/authorization/google';
  }
  handleCredentialResponse(response: GoogleResponse): void {
    const idToken = response.credential;

    if (idToken) {
      // Send the ID token to the Spring Boot API
      if (idToken) {
        this.userService.getUserDetails(idToken).subscribe(
          data => {
          console.log(data)
            console.log('User Details:', data);
          },
          error => {

            console.error('Error calling backend API:', error);
          }
        );
      } else {

        console.error('No ID token found');
      }
    }
  }

  signInWithGoogle() {

  }
}
