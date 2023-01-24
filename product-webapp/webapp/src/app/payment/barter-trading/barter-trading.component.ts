import { Component, OnInit } from '@angular/core';
import ProductDetails from "../../product_details.json";
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/model/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductServiceService } from 'src/app/service/product-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Order } from 'src/app/model/order';
import { OrderHistoryService } from 'src/app/service/order-history.service';




@Component({
  selector: 'app-barter-trading',
  templateUrl: './barter-trading.component.html',
  styleUrls: ['./barter-trading.component.css']
})
export class BarterTradingComponent implements OnInit {
productdetail:any;
getProduct:any;
productId:any;
productName:any;
productOwner:any;
productImage:any;
modeOfPayment:any;
selected:any;
order:Order={
  productId: 0, productName: "", sellerName: "", buyerName: localStorage.getItem('loginId'), dateOfTransaction: "", image: '', paymentMode: '', amount: 0, productCategory: '',
  orderId: 0
};
  noOfBarterCoin: number;
  productCategory: String;
constructor(private dialog: MatDialog,private productService:ProductServiceService,private route:Router, private snackBar:MatSnackBar,private orderService:OrderHistoryService) { }

ngOnInit(): void {
  this.productId=localStorage.getItem("productId");
  this.productName=localStorage.getItem("productName");
  
  this.productService.getProductIdByProductOwner(localStorage.getItem("loginId")).subscribe(data=>{
    console.log(data);
    this.getProduct=data;
  });
  this.productService.getProductById(this.productId).subscribe((product:any)=>{
    this.productOwner=product.productOwner;
    this.productImage=product.productImage;
    this.modeOfPayment=product.modeOfPayment;
    this.noOfBarterCoin=product.noOfBarterCoin;
    this.productCategory=product.productCategory;
  })
}
closeDialog(){
  this.dialog.closeAll();
}
onTrade(message,action){
  
  this.productService.exchangeItems(parseInt(this.productId),parseInt(this.selected)).subscribe(data=>{
    console.log(data);
  });

    this.order.productId=this.productId;
    this.order.productName=this.productName;
    this.order.sellerName=this.productOwner;
    this.order.image=this.productImage;
    this.order.paymentMode=this.modeOfPayment;
    this.order.amount=this.noOfBarterCoin;
    this.order.productCategory=this.productCategory;
   
    this.orderService.saveOrder(this.order).subscribe(order=>{
      console.log(order);
    });

  this.snackBar.open(message,action);
  this.dialog.closeAll();
  setTimeout(()=>{
    this.route.navigate(['/header/products'])
  },2000)
   
 }
}
