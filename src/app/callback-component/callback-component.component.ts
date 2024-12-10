import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../services/UserService';

@Component({
  selector: 'app-callback-component',
  templateUrl: './callback-component.component.html',
  styleUrl: './callback-component.component.css'
})
export class CallbackComponentComponent {
  constructor(private route: ActivatedRoute, private authService: UserService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const authCode = params['code'];
      if (authCode) {
        this.authService.exchangeAuthCodeForToken(authCode).subscribe(response => {
          console.log('Access Token:', response.access_token);
          localStorage.setItem('access_token', response.access_token);
        });
      } else {
        console.error('Authorization code missing');
      }
    });
  }
}
