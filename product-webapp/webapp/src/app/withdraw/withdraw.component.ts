import { W } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  holderName:String="Swapkaro";
  cardNo:Number=321456
  expiry:String="03/26"
  cvv:Number=256
  amount=0;
  availableBarterCoin: any;
  constructor(private dialog:MatDialog,private user:UserService) { }

  ngOnInit(): void {
    this.user.loginEmail(localStorage.getItem('loginId')).subscribe((user:any)=>{
     
      this.availableBarterCoin=user.totalBarterCoin;
    });
  }

  withdrawal(){
    this.user.addAccount().subscribe(resp=>{
      console.log(resp);
    });
    this.user.withdrawCoin(localStorage.getItem("loginId"),this.amount).subscribe(withdrawStatus=>{
      console.log(withdrawStatus);
    })
    this.dialog.closeAll();
    
  }

  closeDialog(){
    this.dialog.closeAll();
  }
}
