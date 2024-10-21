import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { comment } from './types/class/form';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MasterService {

  constructor(private http :HttpClient) { }
  // CORS_PASS = "https://cors-anywhere.herokuapp.com/"
  // get() {
  //   return this.http.get(this.CORS_PASS + "https://freeapi.miniprojectideas.com/api/Ecommerce/GetAllProducts")
  // }
  private get_database = 'http://localhost:3000/get';
  private post_to_database = 'http://localhost:3000/post';
  private put_to_database = 'http://localhost:3000/put';
  private delete_to_database = 'http://localhost:3000/delete';

  getData() {
    return this.http.get<comment[]>(this.get_database);
  }

  postData(data: comment) {
    return this.http.post(this.post_to_database, data)
  }


  updateData(id: number, data: comment) {
    return this.http.put(`${this.put_to_database}/${id}`, data)
  }

  deleteData(id: number) {
    return this.http.delete(`${this.delete_to_database}/${id}`);
  }

}
