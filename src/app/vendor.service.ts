import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private httpClient: HttpClient) { 
    
  }

  searchVendor(s:String){
    this.httpClient.get("http://localhost:8000/api/vendor-search/"+s);
    console.log("http");
  }
}
