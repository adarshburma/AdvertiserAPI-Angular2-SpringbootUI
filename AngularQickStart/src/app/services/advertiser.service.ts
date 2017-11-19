import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, RequestOptions,Headers} from '@angular/http';
import { HttpParams} from '@angular/common/http'

@Injectable()
export class AdvertiserService {
  
  constructor(private http:Http) {
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    
    console.log('Advetiser service initialized');
  }

  getAdvertisers(){
    return this.http.get('http://localhost:8080/api/advertiser')
                .map (res => res.json());  
  }

  getAdvertiser(name : string){
    
    let URL = 'http://localhost:8080/api/advertiser/byname?name=' + name;
    return this.http.get(URL)
    .map (res => res.json());  
  }
 
  postAdvertiser(advertiser : Advertiser){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8080/api/advertiser',advertiser,options)
                    .map(res => res.json());
    
  }

  deleteAdvertiser(name : string){
    let URL = 'http://localhost:8080/api/advertiser?name=' + name;
    return this.http.delete(URL)
                .map(res => res.json());
  }

  updateAdvertiser(advertiser : Advertiser){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8080/api/advertiser',advertiser,options)
                    .map(res => res.json());
  }

}


interface Advertiser{
  name : string,
  contactName : string,
  credit : number
}
