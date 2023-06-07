import { Component,OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import{TokenStorageService} from '../_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:any={};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private router: Router) {}

  ngOnInit() {}

  
  login() {
    this.authService.login(this.form).subscribe(
      {
        next: (data:any) => {
          console.log(data.accessToken);
          console.log(data);
          this.tokenStorage.saveToken(data);
          // this.tokenStorage.saveUser(data);
          let a:string|null = this.tokenStorage.getToken();
          console.log(a);
          
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          // this.roles = this.tokenStorage.getUser().roles;
          // window.location.reload();
          this.router.navigate(['/searchpage']);
        },
        error: (err:any) => {
          console.log('error', err);
          // this.errorMessage = err.error.message;
          // this.isLoginFailed = true;
        }
      });

     
}

gotoRegister(){
  this.router.navigate(['/register']);
};

}
