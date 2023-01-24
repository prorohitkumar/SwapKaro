import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormArray,FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product';
import {Address} from '../model/address';
import { Router } from '@angular/router';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import itemCategories from '../files/categories.json';
import { MatSnackBar } from '@angular/material/snack-bar';
import moment from 'moment';
import { ModeOfPayment } from '../model/mode-of-payment.enum';
import { ChatService } from '../service/chat.service';


@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.css']
})
export class PostProductComponent implements OnInit {
  categoryOption:any;
  productForm: FormGroup;  
  isOptional = false;
  maxDate:any;
  
  fileUpload: File = null;
  imageUrl:String="/assets/image/download.png";
  isHidden:boolean=false;
  isHidden2:boolean=false;
  optionValue:any;
  productObj:Product=new Product();
  file:any[]=[];
  addressObj:Address=new Address();
 paymentMode:String;
 modes:String[]=["Coins","Bartering","Both"];
  date=(new Date().toJSON()).split("-");
  items=[];
  chat:any={productId:0,productOwner:"",buyersChat:[]}
  // visible: boolean = true;
  // selectable: boolean = true;
  // removable: boolean = true;
  // addOnBlur: boolean = false;
  // separatorKeysCodes = [ENTER, COMMA];
  // exchangeItemCtrl=new FormControl();
  // exchangeItems=[];
  // @ViewChild('exchangeItemInput') exchangeItemInput:ElementRef;


  // files: File[] = [];

	// onSelect(event) {
	// 	console.log(event);
	// 	this.files.push(...event.addedFiles);
	// }

	// onRemove(event) {
	// 	console.log(event);
	// 	this.files.splice(this.files.indexOf(event), 1);
	// }
  futureDateDisable():any{
    var date:any=new Date();
    var todayDate:any=date.getDate();
    var month:any=date.getMonth()+1;
    var year:any=date.getFullYear();
    if(todayDate<10){
      todayDate='0'+todayDate;
    }
    if(month<10){
      month='0'+month;
    }
    this.maxDate=year+'-'+month+'-'+todayDate
  }

  
  get exchangeItems(){
    return (this.productForm.get('exchangeItems'));
  }
  get productCategory(){
    return (this.productForm.get('productCategory'));
  }

  constructor(private service:ProductService,private chatService:ChatService,private route:Router, private snackBar:MatSnackBar) {}

  categories=itemCategories;  

  ngOnInit() {
    this.productForm =  new FormGroup({
      productName: new FormControl('', Validators.required),
      productCategory:new FormControl('',Validators.required),
      categoryDescription:new FormControl(''),
      yearOfPurchase:new FormControl('',[Validators.required,Validators.max(this.futureDateDisable())]),
      quantity:new FormControl('',Validators.required),
      productDescription:new FormControl('',Validators.required),
      houseNumber:new FormControl('',Validators.required),
      streetName:new FormControl('',Validators.required),
      state:new FormControl('',Validators.required),
      city:new FormControl('',Validators.required),
      pincode:new FormControl('',Validators.required),
      modeOfPayment:new FormControl('',Validators.required),
      productImage:new FormControl('',Validators.required),
      noOfBarterCoin:new FormControl(''),
      exchangeItems:new FormControl('')
    });
    
      
  }
  addItems(){
    this.items.push(this.exchangeItems.value);
    this.exchangeItems.setValue(null);
  }
  remove(item: any): void {
    if (item >= 0) {
      this.items.splice(item, 1);
    }
  }

 handleFileInput(files) {
  this.prepareFilesList(files);
  
}
prepareFilesList(files: Array<any>) {
  for (const item of files) {
    item.progress = 0;
    this.file.push(item);
  }
  this.uploadFilesSimulator(0);
}
uploadFilesSimulator(index: number) {
  setTimeout(() => {
    if (index === this.file.length) {
      return;
    } else {
       const progressInterval = setInterval(() => {
        if (this.file[index].progress === 100) {
          clearInterval(progressInterval);
          this.uploadFilesSimulator(index + 1);
        } else {
          this.file[index].progress += 5;
        }
      }, 200);
    }
  }, 1000);
}
formatBytes(bytes, decimals) {
  if (bytes === 0) {
    return '0 Bytes';
  }
  const k = 1024;
  const dm = decimals <= 0 ? 0 : decimals || 2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

  modeStatus:any;

  radioButtonChanged($event){
    let radioValue=event.target['value'];
    if(radioValue=="0"){
      this.isHidden=true;
      this.isHidden2=false;
      this.modeStatus=ModeOfPayment.COINS;
    }
    else if(radioValue=="1"){
      this.isHidden2=true;
      this.isHidden=false;
      this.modeStatus=ModeOfPayment.BARTERING;
    }
    else if(radioValue=="2"){
      this.isHidden=true;
      this.isHidden2=true;
      this.modeStatus=ModeOfPayment.BOTH;
    }
    else{
      this.isHidden=false;
      this.isHidden2=false
    }
  }
  
  postNewProduct(message,action){
    console.log("data",this.productForm.value);
    this.productObj.productName=this.productForm.value.productName;
    this.productObj.productCategory=this.productForm.value.productCategory;
    this.productObj.categoryDescription=this.productForm.value.categoryDescription;
    this.productObj.yearOfPurchase=moment(this.productForm.value.yearOfPurchase).valueOf();
    this.productObj.quantity=this.productForm.value.quantity;
    this.productObj.dateOfPosting=this.date[0]+"-"+this.date[2].substring(0,2)+"-"+this.date[1];
    this.productObj.productOwner=localStorage.getItem("loginId");
    // this.productObj.productOwner="aa@gmail.com";
    this.productObj.productDescription=this.productForm.value.productDescription;
    this.productObj.modeOfPayment=this.modeStatus;
    this.productObj.noOfBarterCoin=this.productForm.value.noOfBarterCoin;
    this.addressObj.houseNumber=this.productForm.value.houseNumber;
    this.addressObj.streetName=this.productForm.value.streetName;
    this.addressObj.state=this.productForm.value.state;
    this.addressObj.city=this.productForm.value.city;
    this.addressObj.pincode=this.productForm.value.pincode;
    this.productObj.address=this.addressObj;
    this.productObj.exchangeItems=this.items;
    console.log("product",this.productObj);
    this.service.postProduct(this.productObj,this.file[0]).subscribe((data:any)=>{   
      console.log(data)       
      this.chat.productId=data.productId;
      this.chat.productOwner=data.productOwner;
      console.log(this.chat)  
      this.chatService.saveChat(this.chat).subscribe();
    }
    )
    this.snackBar.open(message,action);

    setTimeout(()=>{this.route.navigate(['/header/suggestions'])},2000)
    
  }

  // add(event: MatChipInputEvent): void {
  //   const input = event.input;
  //   const value = event.value;
  //   if ((value || '').trim()) {
  //     this.exchangeItems.push(value.trim());
  //   }
  //   if (input) {
  //     input.value = '';
  //   }
  //   this.exchangeItemCtrl.setValue(null);
  // }
  
  // remove(item: any): void {
  //   const index = this.exchangeItems.indexOf(item);
  //   if (index >= 0) {
  //     this.exchangeItems.splice(index, 1);
  //   }
  // }
  // selected(event: MatAutocompleteSelectedEvent): void {
  //   this.exchangeItems.push(event.option.viewValue);
  //   this.exchangeItemInput.nativeElement.value = '';
  //   this.exchangeItemCtrl.setValue(null);
  // }
}
