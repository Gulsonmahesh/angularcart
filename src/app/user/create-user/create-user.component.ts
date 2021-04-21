import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  phoneNumber = "^(\+\d{1,3}[- ]?)?\d{10}$";
  userName = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d]).*$";
  
  submitted = false;
  userForm: any = null;

  constructor(private formBuilder: FormBuilder, private userService:UserService,
    private router:Router) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      userName: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      passWord: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['',[Validators.required, Validators.minLength(8)]],
      mobile: ['', [Validators.required,Validators.maxLength(10)]]
  });
  }
  createUser() {
    this.submitted = true;
    if(this.userForm.value.passWord !== this.userForm.value.confirmPassword) {
      alert("Password and Confirm Password must match");
      return;
    } else {
      console.log(this.userForm.value);
      if(this.userForm.status !== "INVALID") {
        sessionStorage.setItem('username', this.userForm.value.userName);
        this.userService.userRegistration(this.userForm.value).subscribe(
          (data)=> {
            alert('user Created Successfully');
            this.router.navigate(['/productlist'])
          },
          (error)=>{
            alert('Unable to Create User');

            this.router.navigate(['/productlist']);
            console.log(error);
          }
        )
      }
    }
  }
  checkPassword() {
    if(this.userForm.value.passWord !== this.userForm.value.confirmPassword) {
      alert("Password and Confirm Password must match");
      return;
    }
  }
  get f() { return this.userForm.controls; }

}
