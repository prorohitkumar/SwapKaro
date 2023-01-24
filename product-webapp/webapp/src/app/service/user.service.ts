import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = environment.apiBaseUrl + '/user-service';
  // baseUrl = "http://localhost:8090";
  secondaryBaseUrl = environment.apiBaseUrl +'/authentication-service';
  // secondaryBaseUrl = 'http://localhost:8095';

  registerUser(user) {
    return this.httpClient.post(this.baseUrl + "/api/v4/register", user);
  }

  loginUser(credentials) {
    return this.httpClient.post(this.baseUrl + "/api/v4/login", credentials);
  }

  loginEmail(email) {
    return this.httpClient.get(this.baseUrl + "/api/v4/user/" + email);
  }

  // fetching goggle id

  getGoogleId() {
    return this.httpClient.get(this.secondaryBaseUrl + "/api/v5/login/user");
  }

  exchangeUsingBarterCoin(buyerEmailId: any, sellerEmailId: any, coins: any) {
    const httpParams = new
      HttpParams().set("buyer", buyerEmailId)
      .set("seller", sellerEmailId)
      .set("coin", coins);

    return this.httpClient.put(this.baseUrl + "/api/v4/user/coin", {}, { params: httpParams });
  }
  dipositCoin(email: any, dollar: any) {
    const httpParams = new
      HttpParams().set("user", email)
      .set("dollar", dollar);

    return this.httpClient.post(this.baseUrl + "/api/v4/user/coins", {}, { params: httpParams });
  }
  withdrawCoin(email: any, coin: any) {
    const httpParams = new
      HttpParams().set("user", email)
      .set("coin", coin);
    return this.httpClient.put(this.baseUrl + "/api/v4/user/withdraw", {}, { params: httpParams });
  }
  addAccount(){
    return this.httpClient.post(this.baseUrl+"/api/v4/user/account",null);
  }
}
