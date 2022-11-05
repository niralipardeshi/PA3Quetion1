import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {

  constructor() { }
 data2:any;
  ngOnInit(): void {
  }
 
  onSubmit(data:any){
    this.data2=data.value;
  //alert(data.value.name + " "+ data.value.email + " "+data.value.age);
    console.log(data.value);
  }

}
