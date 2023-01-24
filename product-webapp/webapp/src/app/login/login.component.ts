import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductSuggestionService } from '../service/product-suggestion.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup:any;
  loginError:boolean=false;
  user:any={email:"",address:{houseNumber:"",streetName:"",state:"",city:"",pincode:0},password:"",totalBarterCoin:1.1}
  constructor(private formBuilder:FormBuilder,private userService:UserService,private router:Router,private suggestion:ProductSuggestionService) { }

  ngOnInit(): void {

    this.formGroup=this.formBuilder.group({
      emailFormControl: new FormControl('', [Validators.required, Validators.email]),
      passwordFormControl: new FormControl('', [Validators.required,Validators.minLength(8)]),
    })

  }

  onLogin(data:FormGroup){
    console.log(data.value)
    this.user.email=data.value.emailFormControl
    this.user.password=data.value.passwordFormControl
    console.log(this.user);

    this.userService.loginEmail(this.user.email).subscribe((resp:any)=>{
      if(resp==null){
          this.loginError=true;
      }
    })

    this.userService.loginUser(this.user).subscribe((data)=>{
      console.log(data);
      
      if(data!=null){
        this.loginError=false;
        localStorage.setItem('loginId',this.user.email);
        
        this.router.navigate(["/header/suggestions"])
      }
      else{
        this.loginError=true;
      }
     
    })
  }

  onRegister(){
    this.router.navigate(["/register"])
  }


}
