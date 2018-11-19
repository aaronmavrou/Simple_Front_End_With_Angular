import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

  constructor(private http: HttpClient) { };
  
  public fruitsUrl1 = 'products/getall';
  public fruitsUrl2 = 'products/create';
  
  public getFruits(){
    return this.http.get(this.fruitsUrl1);
  };
  
  public postFruits(name2: string){
    let fruitObj = {
      "name": name2,
      "price": 10,
      "quantity": 10,
      "taxRate": 0,
    }
    return this.http.post(this.fruitsUrl2, fruitObj, this.httpOptions);
  }
  
}
