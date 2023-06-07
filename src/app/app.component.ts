import { Component,OnInit } from '@angular/core';
import{TokenStorageService} from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'marketplace';
  // isAuthenticated = false;

  // constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    // console.log('AppComponent');
    // if(this.tokenStorageService.getToken()){
    //   this.isAuthenticated = true;
    // }
  }
  // logout() {
  //   this.tokenStorageService.signOut();
  //   window.location.reload();
  // }

  

}
