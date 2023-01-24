import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../model/product";
import { PostProductComponent } from "../post-product/post-product.component";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root",
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = environment.apiBaseUrl + '/product-service';
  // baseUrl = "http://localhost:8097";

  postProduct(productObj: any, productImage: File) {
    const data: FormData = new FormData();
    data.append("file", productImage);
    data.append("productfile", JSON.stringify(productObj));
    return this.httpClient.post(this.baseUrl + "/api/v1/product", data);

  }

}
