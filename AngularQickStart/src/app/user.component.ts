import { Component } from '@angular/core';
import { AdvertiserService } from './services/advertiser.service';




@Component({
  selector: 'user-root',
  template: `
  <div class="col-sm-8"> 
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title"> Add Advertiser</h3>
    </div>
    <div class="panel-body">  
      <form>
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" class="form-control" id="name" [(ngModel)]="name" name="name">
          </div>
          <div class="form-group">
            <label for="contactName">Contact Name:</label>
            <input type="text" class="form-control" id="contactName" [(ngModel)]="contactName" name="contactName"> 
          </div>
          <div class="form-group">
            <label for="credit">Credit:</label>
            <input type="text" class="form-control" id="credit" [(ngModel)]="credit" name="credit"> 
          </div>
          <button type="submit" class="btn btn-success" (click)="addAdvertiser()">Add</button>
      </form>
    </div>  
  </div>
</div>      

<div class="col-sm-4"> 
<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title"> Entered Advertiser Details</h3>
  </div>
  <div class="panel-body">
    <p>name: {{name}}</p> <hr>
    <p>contactName: {{contactName}}</p><hr>
    <p>credit: {{credit}}</p>
  </div>
</div>
</div>

  ` 
 
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class UserComponent {
  name : string;
  contactName : string;
  credit : number;
  private advertiser : Advertiser;
  service : AdvertiserService;

  constructor(service : AdvertiserService){
    this.service = service;
  }

  addAdvertiser(){
    this.advertiser = {
      name : this.name,
      contactName : this.contactName,
      credit : this.credit
    };

    this.service.postAdvertiser(this.advertiser).subscribe(advertiser => {
      console.log(advertiser);
    });
    window.location.reload();
    
  }
  
}

interface Advertiser{
  name : string;
  contactName : string;
  credit : number;
}
