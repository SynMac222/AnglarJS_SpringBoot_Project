import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';
import{Product} from '../_models/product';
import{AdvancedSearchRequest} from './../_models/advanced-search-request';
import{RequestServiceService} from './../_services/request.service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  
})
export class HomePageComponent implements OnInit {
  // minYear: number = 2015;
  // maxYear: number = 2015;

  search: AdvancedSearchRequest = {
    productTypeSearchRequest: {
      application: "",
      type: "",
      mountingLocation: "",
      accessories: "",
      minModelYear: 2015,
      maxModelYear: 2015,
    },
    technicalDetailSearchRequest: {
      minAirflow: 0,
      maxAirflow: 10000,
      minPower: 0,
      maxPower: 100,
      minOperatingVoltage: 0,
      maxOperatingVoltage: 500,
      minFanSpeed: 0,
      maxFanSpeed: 100,
    },
    productname: "",
    certification: "", 
    product_brand: "",
    product_id:0,
  };

  post: Product[];
  selectedProduct: String;
  backuppost:Product[];




  ngOnInit() {}

  constructor(
    private dataService: DataService,
    private requestServiceService:RequestServiceService
  ) { }

  
  onSelectedOption(e) {
    // console.log("e:",e[0].productname);

    this.post = [];
    // console.log(this.dataService.searchOption);
    if(e.length>0){
      this.selectedProduct=e[0].productname;
    }
    else{
      this.selectedProduct="";
    }
    
    
    this.post = this.dataService.filteredListOptions();
    console.log(this.post);
    this.backuppost = this.post;
  }

  onSaveClick(){
    // console.log(this.selectedProduct.valueOf());
    
    var input_search = this.selectedProduct.valueOf();
    var application = this.search.productTypeSearchRequest.application.valueOf();
    var type = this.search.productTypeSearchRequest.type.valueOf();
    var mountingLocation = this.search.productTypeSearchRequest.mountingLocation.valueOf();
    var accessories = this.search.productTypeSearchRequest.accessories.valueOf();
    var minModelYear =this.search.productTypeSearchRequest.minModelYear.valueOf();
    var maxModelYear = this.search.productTypeSearchRequest.maxModelYear.valueOf();
    var minAirflow = this.search.technicalDetailSearchRequest.minAirflow.valueOf();
    var maxAirflow = this.search.technicalDetailSearchRequest.maxAirflow.valueOf();
    var minPower =this.search.technicalDetailSearchRequest.minPower.valueOf();
    var maxPower = this.search.technicalDetailSearchRequest.maxPower.valueOf();
    var minOperatingVoltage = this.search.technicalDetailSearchRequest.minOperatingVoltage.valueOf();
    var maxOperatingVoltage = this.search.technicalDetailSearchRequest.maxOperatingVoltage.valueOf();
    var minFanSpeed = this.search.technicalDetailSearchRequest.minFanSpeed.valueOf();
    var maxFanSpeed = this.search.technicalDetailSearchRequest.maxFanSpeed.valueOf();
    this.selectedProduct="";

    this.requestServiceService.getConditionalProducts(input_search,application,type,mountingLocation,accessories,minModelYear,maxModelYear, minAirflow,  maxAirflow, minPower, maxPower, minOperatingVoltage, maxOperatingVoltage, minFanSpeed, maxFanSpeed).subscribe(products => {
      this.post = products;  // console.log(this.allProduct
      // console.log(this.post);
  });

  }

  onClearClick(){


    // get all the post
  //   this.requestservice.getProducts().subscribe(products => {
  //     this.allProducts = products;
  //     // console.log(this.allProducts);
  //     this.dataservice.postsData = this.allProducts;
     
  // });
    
    this.dataService.searchOption = this.backuppost.slice(0,1);
    this.post = this.dataService.filteredListOptions();

  }

  // getDetail(i){
  //   console.log(i);
  // }


 

}
