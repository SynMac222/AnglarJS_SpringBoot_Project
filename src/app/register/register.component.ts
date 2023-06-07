import { Component,OnInit } from '@angular/core';
import{AuthService} from '../_services/auth.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  user_types = ['ADMIN', 'USER','Manager','Designer'];
  topicHasError: boolean = false;

  constructor(private authService: AuthService,private router: Router){};

  ngOnInit() {};

  validateTopic(value: string) {
   
    if (value === "default") {
      return this.topicHasError;
    } else {
      return !this.topicHasError;
    }
  }

  onSubmit() {
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        // this.router.navigate(['']);
        setTimeout(() => {
          this.router.navigate(['']);
      }, 5000);  //5s

      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
