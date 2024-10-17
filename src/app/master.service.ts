import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http :HttpClient) { }
  CORS_PASS = "https://cors-anywhere.herokuapp.com/"
  get() {
    return this.http.get(this.CORS_PASS + "https://freeapi.miniprojectideas.com/api/Ecommerce/GetAllProducts")
  }

}
