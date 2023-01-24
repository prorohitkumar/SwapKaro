import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  holderName:String="Swapkaro";
  cardNo:Number=321456
  expiry:String="03/26"
  cvv:Number=256
  amount:Number;
  availableBarterCoin:any;

  constructor(private dialog:MatDialog,private userService:UserService,private route:Router,private snackBar:MatSnackBar ) { }

  ngOnInit(): void {
    this.availableBarterCoin=localStorage.getItem('totalBarterCoin');
  }
  closeDialog(){
    this.dialog.closeAll();
  }
  withdraw(message,action){
    this.userService.withdrawCoin(localStorage.getItem('loginId'),this.amount).subscribe(data=>{
      console.log(data);
    })
    this.snackBar.open(message,action);

    setTimeout(()=>{this.route.navigate(['/header/products'])},500)

  }
  diposit(message,action){
    this.userService.addAccount().subscribe();
    this.userService.dipositCoin(localStorage.getItem('loginId'),this.amount).subscribe(data=>{
      console.log(data);
    })
    this.snackBar.open(message,action);
    this.dialog.closeAll();
    this.route.navigate(['/header/products'])

  }

}
