import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QrService {

  constructor(private http: HttpClient) { }
  baseUrl = environment.apiBaseUrl + '/qr-generate-service';
  // baseUrl = "http://localhost:8066";

  getAllProducts(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "/api/v1/products");
  }
  getProductById(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "/api/v1/product/{productId}");
  }
  qr(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "/api/v1/qr/{productId}");
  }
  getQR(productId: any): Observable<any> {
    return this.http.get("http://localhost:8066/api/v1/qr/" + productId);
  }
}
