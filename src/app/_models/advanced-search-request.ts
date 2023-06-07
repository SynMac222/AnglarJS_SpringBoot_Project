import {ProductTypeSearchRequest} from "./product-type-search-request";
import {TechnicalDetailSearchRequest} from "./technical-detail-search-request";

export interface AdvancedSearchRequest{
  
    product_id: number,
    certification: string, 
    product_brand: string,
    productname:string,
    productTypeSearchRequest:ProductTypeSearchRequest,
    technicalDetailSearchRequest:TechnicalDetailSearchRequest,
}