

import { Component,OnInit,EventEmitter,Output,ElementRef,ViewChild} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import{TokenStorageService} from '../_services/token-storage.service';
import{RequestServiceService} from '../_services/request.service.service';
import{DataService} from '../_services/data.service';
import { Router } from '@angular/router';
import{Product} from '../_models/product';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit{
  
  value = '';
  myControl = new FormControl<string | Product>('');

  filteredOptions: Observable<Product[]>;
  allProducts:Product[];


  @ViewChild('autocompleteInput') autocompleteInput: ElementRef;
  @Output() onSelectedOption = new EventEmitter();
  private selectedValue: string;




  constructor(private tokenStorage: TokenStorageService,private router: Router,private requestservice:RequestServiceService,private dataservice:DataService) {}

  ngOnInit() {

    // get all the post
    this.requestservice.getProducts().subscribe(products => {
      this.allProducts = products;
      // console.log(this.allProducts);
      this.dataservice.postsData = this.allProducts;
     
  });
   
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        this.dataservice.searchOption=[];
        // console.log('test');
        // console.log(this.dataservice.searchOption);
        const productname = typeof value === 'string' ? value : value?.productname;
        // console.log(productname);
        return productname ? this._filter(productname as string) : this.allProducts;
      }),
    );
   
  }

  // displayFn(product: Product): string {
  //   return product && product.productname ? product.productname : '';
  // }



  private _filter(productname: string): Product[] {
    const filterValue = productname.toLowerCase();

    return this.allProducts.filter(option => option.productname.toLowerCase().includes(filterValue));
  }



  
  logout() {
    this.tokenStorage.signOut();
    this.router.navigate(['']);
  }



  filterPostList1(event) {
    
  
    this.dataservice.fromsearchpage=true;
    var posts= event.source.value;
    console.log(posts.productname);
    this.dataservice.searchOption=[];
    var posts= event.source.value;
    this.dataservice.searchOption = [posts as Product];
    this.dataservice.selectedObject = event.source.value;
    console.log(this.dataservice.searchOption);
    // if(event.isUserInput==true){

    //   var posts= event.source.value;
    //   // console.log(posts.productname);
   
    //   // console.log(this.dataservice.searchOption);
     
    //   if(!posts) {
    //     this.dataservice.searchOption=[]
    //   }
    //   else {
    //     // console.log("not")
    //       this.value =posts.productname;
    //       this.dataservice.searchOption = [posts as Product];
    //       // console.log(this.dataservice.searchOption);
    //       // this.dataservice.searchOption.push(posts as Product);
    //       this.onSelectedOption.emit(this.dataservice.searchOption);
          
    //   }

    //   this.myControl.setValue('');
    //   this.focusOnPlaceInput()
    

    // }
    this.router.navigate(['/search']);
   
    
        
       
        
  }

  Clear(){
    this.value="";

    this.myControl.setValue('');
 
    this.dataservice.searchOption=[];
    this.onSelectedOption.emit(this.dataservice.searchOption);
    this.focusOnPlaceInput();



    
  }

  focusOnPlaceInput() {
    this.autocompleteInput.nativeElement.focus();
    this.autocompleteInput.nativeElement.value = '';
  }


/** Display function for selected autocomplete values. */
displayNull(value) {
  return null;
}



}
