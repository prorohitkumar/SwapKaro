import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ChatRoomComponent } from "../chat-room/chat-room.component";
import { BarterTradingComponent } from "../payment/barter-trading/barter-trading.component";
import { ProductServiceService } from "../service/product-service.service";
import { DomSanitizer } from "@angular/platform-browser";
import { EmailComponent } from "../email/email.component";
import { Reviews } from "../model/reviews";
import { BarterCoinsComponent } from "../payment/barter-coins/barter-coins.component";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  [x: string]: any;
  // to store the product details so to use it later in the html template
  // productDetail: Product = ProductDetails;
  loginUser: any;
  productDetail: any;
  productId: any;
  product: any[];
  qrHtml:any;
  baseUrl = environment.apiBaseUrl + "/product-service";
  // baseUrl="http://localhost:8097"
  imagePath: string = "assets/images/washingMachine.jpg";


  constructor(
    private dialog: MatDialog,
    private productService: ProductServiceService,
    private domSanitizer: DomSanitizer, private http: HttpClient
  ) { }

  reviewObj: Reviews = new Reviews();
  // comment:FormControl;
  comment: String;
  date = new Date().toJSON().split("-");
  reviewList = [];

  ngOnInit(): void {
    this.loginUser = localStorage.getItem("loginId");
    console.log(this.loginUser);
    // this.productId=this.productService.productId;
    // console.log(this.productId);
    this.productService.getProductById(localStorage.getItem('productId')).subscribe((response) => {
      console.log(response);
      this.productDetail = response;
      this.productDetail.dateOfPosting = this.productDetail.dateOfPosting.substring(0, 10);
      this.productDetail.yearOfPurchase = new Date(this.productDetail.yearOfPurchase).toLocaleDateString();
      this.productDetail.productImage = this.domSanitizer.bypassSecurityTrustResourceUrl("data:img/" + "jpg" + ";base64," + this.productDetail.productImage);


      this.http.get(this.baseUrl + '/api/v1/qr/' + this.productDetail.productId,
        { responseType: 'text' }).subscribe(res => {
          this.qrHtml = this.domSanitizer.bypassSecurityTrustHtml(res);
          console.log("Qr Found", res);

        })
    })

    this.productService
      .getProductById(localStorage.getItem("productId"))
      .subscribe((response) => {
        console.log(response);
        this.productDetail = response;
        this.productDetail.dateOfPosting =
          this.productDetail.dateOfPosting.substring(0, 10);
        this.productDetail.yearOfPurchase = new Date(
          this.productDetail.yearOfPurchase
        ).toLocaleDateString();
        this.productDetail.productImage =
          this.domSanitizer.bypassSecurityTrustResourceUrl(
            "data:img/" + "jpg" + ";base64," + this.productDetail.productImage
          );
        this.reviewList = this.productDetail.reviews;
        console.log(this.reviewList);
      });
  }

  // -------------------------------------------------
  // open the chartroom dialog box
  openDialog() {
    this.dialog.open(ChatRoomComponent, {
      panelClass: "my-custom-dialog-class",
    });
  }
  // -------------------------------------------------

  // -------------------------------------------------
  // open the email dialog box
  openShareDialog() {
    this.dialog.open(EmailComponent, {
      panelClass: "my-custom-dialog-class",
    });
  }
  // -------------------------------------------------

  openDialog1(): void {
    let dialogRef = this.dialog.open(BarterTradingComponent, {
      height: "420px",
      width: "800px",
    });

    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialog2(): void {
    let dialogRef = this.dialog.open(BarterCoinsComponent, {
      height: "420px",
      width: "800px",
    });

    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  closeDialog() {
    this.dialog.closeAll();
  }

  submitReview() {
    this.reviewObj.reviewerEmailId = localStorage.getItem('loginId');
    this.reviewObj.comment = this.comment;
    this.productService.updateReview(this.reviewObj, localStorage.getItem('productId')).subscribe();
  }
}
