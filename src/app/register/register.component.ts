import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerFrom: FormGroup;

  constructor(private router:Router,
    private formBuilder:FormBuilder) {
      this.registerFrom = this.formBuilder.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        emailAddress: ['', [Validators.required]],
        password: ['', Validators.required]
      })
     }

  ngOnInit(): void {
  }

  toLoginPage()
  {
    this.router.navigate(['/login']);
  }

  resetUser()
  {
    this.registerFrom.reset();
  }

  registerUser()
  {

  }

}
