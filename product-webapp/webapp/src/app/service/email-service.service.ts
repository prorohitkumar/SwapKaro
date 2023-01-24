import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Email } from "../model/email";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root",
})
export class EmailServiceService {

  baseUrl = environment.apiBaseUrl + '/email-service/';
  // baseUrl = "http://localhost:8063/api/v1/";

  constructor(private httpClient: HttpClient) { }

  // method to send email
  sendEmail(email: Email): Observable<Email> {
    return this.httpClient.post<Email>(`${this.baseUrl}sendEmail`, email);
  }

  // method to notify owner of interested buyers
  notifyOwner(email: Email): Observable<Email> {
    return this.httpClient.post<Email>(`${this.baseUrl}notifyOwner`, email);
  }
}
