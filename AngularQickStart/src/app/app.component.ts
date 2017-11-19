import { Component } from '@angular/core';
import {AdvertiserService} from './services/advertiser.service';



@Component({
  selector: 'app-root',
  template: ` 
  <ul class="nav nav-tabs">
    <li class="active"><a href="#" (click) = "btnShow()">Home</a></li>
    <li><a routerLink="route/index" routerLinkActive="active">Index</a></li>
  </ul>
  <hr>

   <a routerLink="route/user" routerLinkActive="active" class="btn btn-primary" *ngIf="show === true" role="button" (click)="btnShow()" >Add User</a>

  <router-outlet></router-outlet>
  <hr /> <hr>
 
  <div class="col-sm-8"> 
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title"> Advertisers </h3>
      </div>
      <div class="panel-body thread-row">
        <table class="table table-bordered">  
            <thead>
              <tr>  
                <th> Name </th> 
                <th>Contact Name </th> 
                <th> Credit </th>
                <th> View </th>
              </tr>
            </thead>  
            <tbody>
                <tr *ngFor="let item of advertisers">
                <td><p> {{item.name}}</p></td>
                <td><p> {{item.contactName}}</p></td>
                <td><p>{{item.credit}} </p></td>
                  <td><button type="submit" class="btn btn-primary" (click)="getAdvertiser(item.name)">View</button></td>
                </tr>  
            </tbody>
        </table>
      </div>  
    </div>  
  </div>

<div class="col-sm-4"> 
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title"> Selected Advertiser</h3>
    </div>
    <div class="panel-body">
      <p><b> name: &nbsp; </b> {{this.getAdvertise.name}}</p> <hr>
      <p><b> contact: &nbsp; </b> {{this.getAdvertise.contactName}}</p><hr>
      <p><b> credit: &nbsp; </b> {{this.getAdvertise.credit}}</p> <hr>
      <button type="submit" class="btn btn-danger" (click)="deleteAdvertiser(this.getAdvertise.name)">Delete Advertiser</button>
    </div>
  </div>
</div>
`,
providers : [AdvertiserService]

})
export class AppComponent {
  show : boolean;
  advertisers : Advertiser[];
  advertise : Advertiser;
  getAdvertise : Advertiser;
  service : AdvertiserService;
  private advertiser : Advertiser;

  constructor(private advertiserService : AdvertiserService){
    this.service = advertiserService;
    this.show = true; 
    advertiserService.getAdvertisers().subscribe(advertisers => {
      this.advertisers = advertisers
    });
  }

  btnShow(){
    if(this.show == true){
      this.show = false;
    }else{
      this.show = true;
    }
  }

  getAdvertiser(name : string){
    this.service.getAdvertiser(name).subscribe( advertiser => {
      this.getAdvertise = advertiser;
      console.log(advertiser);
   });
  }

  deleteAdvertiser(name : string){
    this.service.deleteAdvertiser(name).subscribe( advertiser => {
      console.log(advertiser);
    });
    for (var index = 0; index < this.advertisers.length; index++) {
      var element = this.advertisers[index];
      if(element.name === name){
        this.advertisers.splice(index,1);
        break;
      }  
    }
  }

  updateAdvertiser(advertiser : Advertiser){
    this.service.updateAdvertiser(advertiser).subscribe(advertise => {
      console.log(advertise);
    //  this.advertisers.push(this.advertise);
      });
  }

}

interface Advertiser{
  name : string,
  contactName : string,
  credit : number
}