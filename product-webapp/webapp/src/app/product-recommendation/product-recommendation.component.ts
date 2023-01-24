import { Component, OnInit } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductServiceService } from '../service/product-service.service';
import { SearchService } from '../service/search.service';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-product-recommendation',
  templateUrl: './product-recommendation.component.html',
  styleUrls: ['./product-recommendation.component.css']
})
export class ProductRecommendationComponent implements OnInit {
  [x: string]: any;

  // position = new FormControl('after');
  position = new FormControl('above');
  product:any[]=[];
  pagePart:any;
  pagePart1:any;
  searchword:String="";
  searchResult:any[]=[];
  
constructor(private productService:ProductServiceService,private router:Router,private domSanitizer:DomSanitizer){}  

  ngOnInit(): void {

    // this.userService.getGoogleId().subscribe((userId: any) => {
    //   console.log(userId);
    //   localStorage.setItem('loginId', userId)
    // })


    this.productService.getAllAvailableProducts().subscribe((data: any) => {
      console.log(data);
      data.forEach((productObj) => {
        this.product.push(productObj);
      })
      console.log(this.product);
      this.product.map(x => {
        console.log(x)
        x.productOwner = x.productOwner.substring(0, 25);
        x.dateOfPosting = x.dateOfPosting.slice(0, 10);
        x.productImage = this.domSanitizer.bypassSecurityTrustResourceUrl("data:img/" + "jpg" + ";base64," + x.productImage);
      })

      this.pagePart = this.product.slice(0, 8);

    })
    
  }

  OnChange(event: any) {
    console.log(event)
    let start = event.pageIndex * event.pageSize;
    let end = start + event.pageSize;
    if (end > this.product.length) {
      end = this.product.length;
    }
    this.pagePart = this.product.slice(start, end)
  }

  onCardClick(item) {
    console.log(item);
    localStorage.setItem("productId", item.productId);
    localStorage.setItem("productName", item.productName);
    localStorage.setItem("productOwner", item.productOwner);
    // this.productService.productId=item.productId;
    this.router.navigate(['/header/productdetails']);
  }
  // product$: Observable<Product[]> =this.search.getSearchResults();

  searching(){
    this.productService.searchProduct(this.searchword).subscribe((data:any)=>{
            
      // data.forEach((productObj)=>{           
      //   this.searchResult.push(productObj);
      // })
      
      // this.searchResult.map(x=>{
      //   console.log(x)
      //   x.productOwner=x.productOwner.substring(0,25);
      //   x.dateOfPosting=x.dateOfPosting.slice(0,10);
      //   x.productImage=this.domSanitizer.bypassSecurityTrustResourceUrl("data:img/"+"jpg"+";base64,"+x.productImage);
      // })
      // this.pagePart1=this.searchResult.slice(0,8);
      data.forEach((productObj) => {
        this.product.push(productObj);
      })
      console.log(this.product);
      this.product.map(x => {
        console.log(x)
        x.productOwner = x.productOwner.substring(0, 25);
        x.dateOfPosting = x.dateOfPosting.slice(0, 10);
        x.productImage = this.domSanitizer.bypassSecurityTrustResourceUrl("data:img/" + "jpg" + ";base64," + x.productImage);
      })

      this.pagePart = this.product.slice(0, 8);

  })
  }
}

