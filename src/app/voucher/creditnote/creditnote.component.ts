import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { ApiService, MY_DATE_FORMATS } from 'src/app/shared/api.service';


@Component({
  selector: 'app-creditnote',
  templateUrl: './creditnote.component.html',
  styleUrls: ['./creditnote.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class CreditnoteComponent implements OnInit {

  creditdata:any;


constructor(private api:ApiService){}

  ngOnInit(): void {

    this.load();
  }


load(){
  this.creditdata = new FormGroup({
    date: new FormControl("",Validators.compose([Validators.required])),
    customer: new FormControl("", Validators.compose([Validators.required])),
    saleinvoice: new FormControl("", Validators.compose([Validators.required])),
  })
}



  save(data:any){
console.log(data);

  }
}
