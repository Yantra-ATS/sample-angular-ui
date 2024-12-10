import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  // Method to get user data from the backend
  getUserDetails(idToken: string): Observable<any> {
    const url = 'http://localhost:8080/api/auth/user';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${idToken}`,
      'Content-Type': 'application/json'
    });

    return this.http.get<any>(url, { headers });
  }
  exchangeAuthCodeForToken(authCode: string) {
    return this.http.post<{ access_token: string }>('http://localhost:8080/auth/exchange-auth-code', { code: authCode });
  }
}
