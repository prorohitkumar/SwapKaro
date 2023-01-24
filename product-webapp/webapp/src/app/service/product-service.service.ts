import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  
  constructor(private http: HttpClient) { }

   baseUrl = environment.apiBaseUrl + '/product-service';
  // baseUrl = "http://localhost:8097";

  getAllProducts() {
    return this.http.get(this.baseUrl + "/api/v1/products");
  }
  getAllAvailableProducts(){
    return this.http.get(this.baseUrl + "/api/v1/product/availableproducts");
  }
  getProductById(productId: any) {
    return this.http.get(this.baseUrl + "/api/v1/product/" + productId);
  }
  getProductIdByProductOwner(productOwner: any) {
    return this.http.get(this.baseUrl + "/api/v1/product/owner/" + productOwner);
  }
  exchangeItems(sProductId: any, bProductId: any) {
    const httpParams = new HttpParams()
      .set("buyerProductId", bProductId)
      .set("sellerProductId", sProductId);
    return this.http.put(this.baseUrl + "/api/v1/product/exchangeItem", {}, { params: httpParams });
  }
  updateProductStatusForBarterCoinMode(email) {
    return this.http.put(this.baseUrl + "/api/v1/product/updateProductStatus/" + email, {});
  }
  productBySearch(productName: any): Observable<any> {
    return this.http.get(this.baseUrl + "/api/v1/product/" + productName);
  }
  // getQR(productId:any):Observable<any>{
  //   return this.http.get("http://localhost:8066/api/v1/qr/" +productId );
  // }
  updateReview(reviewObj, productId) {
    return this.http.put(this.baseUrl + "/api/v1/product/review/" + productId, reviewObj);
  }
  searchProduct(text){
    return this.http.get("http://localhost:8097/api/v1/product/search/"+text);
  }
  
}
