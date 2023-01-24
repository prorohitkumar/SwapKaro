import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ProductServiceService } from '../service/product-service.service';
import { ProductSuggestionService } from '../service/product-suggestion.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-product-suggestion',
  templateUrl: './product-suggestion.component.html',
  styleUrls: ['./product-suggestion.component.css']
})
export class ProductSuggestionComponent implements OnInit {
  position = new FormControl('above');
  product:any[]=[];
  pagePart:any; 
  loginUserCity="Nahan";
  retreivedImage:any;
  searchword:String="";
  constructor(private productService:ProductServiceService, private productSuggestionService:ProductSuggestionService,private domSanitizer:DomSanitizer,private router:Router,private userService:UserService) { }

  ngOnInit(): void {
    this.userService.loginEmail(localStorage.getItem("loginId")).subscribe((user: any) => {
      this.loginUserCity = user.address.city;
      console.log(this.loginUserCity);
    })
    setTimeout(() => {
      this.productSuggestionService.getAllProductsByCity(this.loginUserCity).subscribe((data: any) => {
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
    }, 3000)

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

  })}
 
}
