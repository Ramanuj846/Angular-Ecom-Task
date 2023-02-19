import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder:FormBuilder,
     private userService:UserDataService,
     private router:Router,
    private http:HttpClient) {
    this.loginForm=this.formBuilder.group({
      emailId:['',Validators.required],
      password:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }

  // login()
  // {
  //   this.userService.getAllUser().subscribe((res:any)=>{
  //     const user = res.find((loginUser:any)=>{
  //       return loginUser.email === this.loginForm.value.emailId && loginUser.password === this.loginForm.value.password
  //     })
  //     if(user)
  //     {
  //       alert("Login Sucessfully");
  //       this.loginForm.reset();
  //       this.router.navigate(['/products']);
  //     }
  //     else{
  //       alert("Email Id or Password is incorrect");
  //     }
  //   },(error)=>{
  //     alert("Something Went Wrong")
  //   })
  // }

  loginUser()
  {
    this.http.get<any>('https://fakestoreapi.com/users').subscribe((res:any)=>{
      var user = res.find((loginUser:any)=>{
        return loginUser.email === this.loginForm.value.emailId && loginUser.password === this.loginForm.value.password
      });

      if(user)
      {
        alert("Login Sucessfully");
        this.loginForm.reset();
        this.router.navigate(['/products']);
      }
      else{
        alert("Email Id or Password is incorrect");
      }


    },)
  }

}
