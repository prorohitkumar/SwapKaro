import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ProductServiceService } from "../service/product-service.service";

import { UserService } from "../service/user.service";
import { WithdrawComponent } from "../withdraw/withdraw.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {

  loggedInUser: any = localStorage.getItem("loginId");
  search:String="";
  


  constructor(private router: Router,private userService:UserService,private dialog:MatDialog,private productService:ProductServiceService) {}

  userCoins=0;
  ngOnInit(): void {
    this.loggedInUser = localStorage.getItem("loginId").split("@")[0];

    this.userService.loginEmail(localStorage.getItem("loginId")).subscribe((user:any)=>{
      this.userCoins=user.totalBarterCoin;
    });

  }

  withdrawl(){
    this.dialog.open(WithdrawComponent,{
      
    })

  }

  logout() {
    this.router.navigate(["/"]);
    this.loggedInUser = "LOGIN";
    localStorage.clear();
  }

  sideNavOpen: boolean = false;

  sideNavToggler() {
    this.sideNavOpen = !this.sideNavOpen;
  }
  searching(){
    this.productService.searchProduct(this.search).subscribe(data=>console.log(data));
  }
}
