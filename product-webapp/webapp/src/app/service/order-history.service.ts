import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.apiBaseUrl + '/product-trading-service';
  // baseUrl = "http://localhost:8075";

  saveOrder(order){
    return this.http.post(this.baseUrl+"/api/v1/order",order);
  }

  getAllOrderHistories(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "/api/v1/orders");
  }
  getOrderHistoryByOrderId(orderId: any): Observable<any> {
    return this.http.get<any>(this.baseUrl + "/api/v1/order/" + orderId);
  }

  getOrderByLoginUser(email) {
    return this.http.get(this.baseUrl + "/api/v1/order/buyer/" + email);
  }
}
