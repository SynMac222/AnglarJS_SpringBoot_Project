import { Injectable } from '@angular/core';
import{Product} from '../_models/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  searchOption:Product[]=[];
  public postsData: Product[]=[];
  postUrl : string = "https://jsonplaceholder.typicode.com/posts"; 

  fromsearchpage:boolean=false;
  selectedObject:Product;

  constructor() { }



  

  filteredListOptions() {
    let posts = this.postsData;
        let filteredPostsList:Product[] = [];
        for (let post of posts) {
            for (let options of this.searchOption) {
                if (options.productname === post.productname) {
                  filteredPostsList.push(post);
                }
            }
        }
        // console.log(filteredPostsList);
        return filteredPostsList;
  }
}
