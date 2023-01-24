import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { InvoiceComponent } from "./invoice/invoice.component";
import { OrderHistoryService } from "../service/order-history.service";
import { Order } from "../model/order";
@Component({
  selector: "app-order-history",
  templateUrl: "./order-history.component.html",
  styleUrls: ["./order-history.component.css"],
})
export class OrderHistoryComponent implements OnInit {
  order: any = [];
  retrieveImage: any;
  router: any;
  pagePart: any;
  page = 1;
  totalLength = 0;
  constructor(public dialog: MatDialog, private orderhistoryService: OrderHistoryService) { }
  openDialog(orderId) {
    let dialogRef = this.dialog.open(InvoiceComponent, {
      height: '600px',
      width: '800px',
    });
    console.log(orderId);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    localStorage.setItem("orderId", orderId);
  }
  ngOnInit(): void {
    this.orderhistoryService.getOrderByLoginUser(localStorage.getItem('loginId')).subscribe((data: any) => {
      console.log("data", data);
      data.forEach(order => {
        console.log(order);
        this.order.push(order);
      })
      console.log(this.order);
      this.order.map(order => {
        let buyerName = order.buyerName.split('@');
        let seller = order.sellerName.split("@");
        order.buyerName = buyerName[0];
        order.sellerName = seller[0];
        order.image = 'data:image/jpg;base64,' + order.image;
      })
    })
  }
  closeDialog() {
    this.dialog.closeAll();
  }
}
