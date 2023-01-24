import { Component, OnInit } from "@angular/core";

import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { CardComponent } from "src/app/card/card.component";
import { Email } from "src/app/model/email";
import { Order } from "src/app/model/order";
import { Product } from "src/app/model/product";
import { EmailServiceService } from "src/app/service/email-service.service";
import { OrderHistoryService } from "src/app/service/order-history.service";
import { ProductServiceService } from "src/app/service/product-service.service";
import { UserService } from "src/app/service/user.service";

@Component({
  selector: "app-barter-coins",
  templateUrl: "./barter-coins.component.html",
  styleUrls: ["./barter-coins.component.css"],
})
export class BarterCoinsComponent implements OnInit {
  productDetail: any;
  order:Order={
    productId: 0, productName: "", sellerName: "", buyerName: localStorage.getItem('loginId'), dateOfTransaction: "", image: '', paymentMode: '', amount: 0, productCategory: '',
    orderId: 0
  };
  availableBarterCoin: any;
  user: any;
  notificationEmails:any=[];
  email: Email = {
    receiversEmail: [],
    subject: "Notification Alert form SwapKaro",
    messageBody: "Check out our new Product!",
    attachment: "http://localhost:4200/header/productdetails",
  };

  constructor(
    private dialog: MatDialog,
    private productService: ProductServiceService,
    private userService: UserService,
    private route: Router,
    private snackBar: MatSnackBar,
    private emailService: EmailServiceService,
    private orderService:OrderHistoryService
  ) { }

  ngOnInit(): void {
    this.productService
      .getProductById(localStorage.getItem("productId"))
      .subscribe((response) => {
        console.log(response);
        this.productDetail = response;
      });
    this.userService
      .loginEmail(localStorage.getItem("loginId"))
      .subscribe((response) => {
        console.log(response);
        this.user = response;
        this.availableBarterCoin = this.user.totalBarterCoin;
      });
  }
  closeDialog() {
    this.dialog.closeAll();
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(CardComponent, {
      height: "420px",
      width: "800px",
    });

    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
    localStorage.setItem("totalBarterCoin", this.user.totalBarterCoin);
  }
  onPayment(message, action) {
    // ---------------------------------------------------------------------------------
    this.notificationEmails.push(this.productDetail.productOwner);
    this.notificationEmails.push(localStorage.getItem("loginId"));
    this.email.receiversEmail = this.notificationEmails;
    // -----------------------------------
    // debugging the productId
    console.log(this.productDetail.productId);
    // -----------------------------------
    // -----------------------------------
    // debugging the notification emails
    console.log(this.notificationEmails);
    // -----------------------------------
    // notify the user of the interested buyer
    this.emailService.notifyOwner(this.email).subscribe((res) => {
      this.email = res;
      alert("Owner has been successfully notified !!!");
      this.notificationEmails = [];
    });
    // ----------------------------------------------------------------------------------
    this.order.productId=this.productDetail.productId;
    this.order.productName=this.productDetail.productName;
    this.order.sellerName=this.productDetail.productOwner;
    this.order.image=this.productDetail.productImage;
    this.order.paymentMode=this.productDetail.modeOfPayment;
    this.order.amount=this.productDetail.noOfBarterCoin;
    this.order.productCategory=this.productDetail.productCategory;
   
    this.orderService.saveOrder(this.order).subscribe(order=>{
      console.log(order);
    });

    this.userService
      .exchangeUsingBarterCoin(
        localStorage.getItem("loginId"),
        this.productDetail.productOwner,
        this.productDetail.noOfBarterCoin
      )
      .subscribe((data) => {
        console.log(data);
      });

    this.productService
      .updateProductStatusForBarterCoinMode(this.productDetail.productId)
      .subscribe((data) => console.log(data));
    this.snackBar.open(message, action);
    this.dialog.closeAll();
    this.route.navigate(["/header/products"]);
  }
}
