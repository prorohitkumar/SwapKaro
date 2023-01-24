import { Component, OnInit } from "@angular/core";
import { Chat } from "../model/chat";

import chats from "../chats.json";
import { MatDialog } from "@angular/material/dialog";
import { ChatService } from "../service/chat.service";
import { ChatWithBuyer } from "../model/ChatWithBuyer";
import { MessageBody } from "../model/MessageBody";

@Component({
  selector: "app-chat-room",
  templateUrl: "./chat-room.component.html",
  styleUrls: ["./chat-room.component.css"],
})
export class ChatRoomComponent implements OnInit {
  imagePath: string = "assets/images/washingMachine.jpg";
  container:any;
  date:any;
  // ---------------- json data ----------------
  // chatHistory: Chat = chats;
  // -------------------------------------------
  message="";
  chatHistory:Chat;
  productBuyer:any;
  loginedUser="";
  productOwner="";
  buyersChat=[];
  chatsAvailable:boolean=true;
  constructor(private dialog:MatDialog,private chatService:ChatService) {}

  ngOnInit(): void {
    this.productOwner=localStorage.getItem("productOwner")
    this.loginedUser=localStorage.getItem("loginId")
    if((this.productOwner)==(this.loginedUser)){
      this.chatService.chatByProductId(localStorage.getItem('productId')).subscribe((allChats:any)=>{
        console.log(allChats);
        this.chatHistory=allChats;
        console.log(this.chatHistory);
        if(this.chatHistory.buyersChat[0]==null){
          console.log("www");
          this.chatsAvailable=false;
        }
        else{

          this.productBuyer=this.chatHistory.buyersChat[0];
          console.log(this.productBuyer);
        }
      })
    }
    else{
      this.chatService.chatByProductIdAndBuyer(localStorage.getItem('productId'),localStorage.getItem('loginId')).subscribe((userChat:any)=>{
        console.log(userChat);
        if(userChat.buyerEmail==null){
          userChat.buyerEmail=localStorage.getItem("loginId");
        }
        // userChat.buyerEmail=localStorage.getItem("productOwner");
        this.buyersChat.push(userChat);
        this.chatHistory={'productId':parseInt(localStorage.getItem('productId')),"productOwner":localStorage.getItem('productOwner'),"buyersChat":this.buyersChat};
        console.log(this.chatHistory);

        this.productBuyer=this.chatHistory.buyersChat[0];
        console.log(this.productBuyer);
      })
    }
    
    // console.log(this.chatHistory);
    this.productOwner=localStorage.getItem('productOwner');
    this.loginedUser=localStorage.getItem('loginId');
    
    
  }

  OnBuyerChat(buyer,chatHistorybuyersChat){
    console.log(buyer)
    this.productBuyer=buyer;
    console.log(chatHistorybuyersChat)
  }
  onMessageSend(){
    console.log(this.message);
    this.productBuyer.buyerEmail
    this.chatService.editChat(this.productBuyer.buyerEmail,this.loginedUser,this.message,{'productId':localStorage.getItem('productId'),"productOwner":localStorage.getItem('productOwner')}).subscribe(

    );
  }
  closeDialog(){
    this.dialog.closeAll();
  }
}
