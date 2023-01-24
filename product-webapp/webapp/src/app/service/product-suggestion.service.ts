import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductSuggestionService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.apiBaseUrl + '/product-recommendation-service';
  // baseUrl = "http://localhost:8070";

  getAllProductsByCity(city) {
    return this.http.get(this.baseUrl + "/api/v3/productCity/" + city);
  }
}
