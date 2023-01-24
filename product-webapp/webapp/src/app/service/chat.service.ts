import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chat } from '../model/chat';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.apiBaseUrl + '/chat-service';
  // baseUrl = "http://localhost:8099";


  saveChat(chat) {
    return this.http.post(this.baseUrl + "/api/v5/chat", chat);
  }

  editChat(buyerEmail, email, message, chat) {

    return this.http.post(this.baseUrl + "/api/v5/user/chats?buyerEmail=" + buyerEmail + "&loginedEmail=" + email + "&message=" + message, chat);
  }

  chatByProductId(productId) {
    return this.http.get(this.baseUrl + "/api/v5/chats/" + productId);
  }

  chatByProductIdAndBuyer(productId, loginedEmail) {
    return this.http.get(this.baseUrl + "/api/v5/user/chats?productId=" + productId + "&buyerEmail=" + loginedEmail);
  }

}
