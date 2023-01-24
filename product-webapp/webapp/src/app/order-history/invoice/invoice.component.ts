import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Invoice } from 'src/app/model/invoice';
import { OrderHistoryService } from 'src/app/service/order-history.service';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  invoices: Invoice = { orderId: 0, productId: 0, productName: '', buyerName: '', sellerName: '', dateOfTransaction: "", paymentMode: "", productCategory: "", amount: 0 };
  constructor(private dialog: MatDialog, private orderhistoryService: OrderHistoryService, @Inject(MAT_DIALOG_DATA) public data: OrderHistoryService, private http: HttpClient) { }
  ngOnInit(): void {
    this.orderhistoryService.getOrderHistoryByOrderId(localStorage.getItem("orderId")).subscribe((order: any) => {
      let buyerName = order.buyerName.split('@');
      let seller = order.sellerName.split("@");
      order.buyerName = buyerName[0];
      order.sellerName = seller[0];
      this.invoices = order;
    })
  }
  closeDialog() {
    this.dialog.closeAll();
  }
}