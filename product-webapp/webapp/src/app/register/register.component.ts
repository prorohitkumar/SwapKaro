import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CongratulationComponent } from '../congratulation/congratulation.component';
import { Address } from '../model/address';
import { User } from '../model/user';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  myGroup:any;
  address:Address={houseNumber:"",streetName:"",state:"",city:"",pincode:0}
  user:User={email:"",address:this.address,password:"",totalBarterCoin:0}
  emailError:any;
  googleAPI=""
  constructor(private formBuilder:FormBuilder,private userService:UserService,private router:Router,private dialog:MatDialog) { }

  ngOnInit(): void {
    document.getElementById('mail').addEventListener("focusout",(event:any)=>{
      console.log(event.target.value);
      
      this.userService.loginEmail(event.target.value).subscribe((resp)=>{
        if(resp==null){
          this.emailError=false;
        }
        else{
          this.emailError=true;
        }
      })
    })
    document.getElementById('mail').addEventListener("focusin",()=>{
      this.emailError=false
    })
    this.myGroup=this.formBuilder.group({
      emailFormControl : new FormControl('', [Validators.required, Validators.email]),
      passwordFormControl :new FormControl('', [Validators.required,Validators.minLength(8)]),
      stateFormControl : new FormControl('', [Validators.required]),
      cityFormControl : new FormControl('', [Validators.required]),

    })

  }

  onRegister(data:FormGroup){
    console.log(data.value);
    this.address.state=data.value.stateFormControl;
    this.address.city=data.value.cityFormControl;
    this.user.email=data.value.emailFormControl;
    this.user.password=data.value.passwordFormControl;
    console.log(this.user);  
    this.userService.registerUser(this.user).subscribe((response)=>{
      console.log("registered");
      console.log(response);
      this.dialog.open(CongratulationComponent,{
        panelClass: "my-custom-dialog-class",
      })
      setTimeout(()=>{
        this.dialog.closeAll();
        this.router.navigate(["/login"])
      },8000)
      
    });
  }

  onLogIn(){
    this.router.navigate(["/login"])
  }

  
}
