import { Email } from './model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  private readonly baseUrl = 'http://10.218.75.164:8088/mail';
  email: Email;

  constructor(private httpClient: HttpClient) { }

  getEmailPlaintext(data): Observable<Email> {
    return this.httpClient.post<Email>(`${this.baseUrl}/plaintext`, data);
  }

  getEmailPlaintextWithAtt(data): Observable<Email> {
    return this.httpClient.post<Email>(`${this.baseUrl}/plaintext/attachment`, data);
  }
  getEmailHTML(data): Observable<Email> {
    return this.httpClient.post<Email>(`${this.baseUrl}/html`, data);
  }
  getEmailHTMLAtt(data): Observable<Email> {
    return this.httpClient.post<Email>(`${this.baseUrl}/html/attachment`, data);
  }

}
