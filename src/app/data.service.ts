import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "https://jsonplaceholder.typicode.com/";

  constructor(private httpClient: HttpClient) {}

  public getData(url:any){
    return this.httpClient.get(this.REST_API_SERVER+url);
  }

  public deletePost(url:any){
    return this.httpClient.delete(this.REST_API_SERVER+url);
  }
}
