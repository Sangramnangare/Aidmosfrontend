import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { ApiService, MY_DATE_FORMATS } from 'src/app/shared/api.service';


@Component({
  selector: 'app-debitnote',
  templateUrl: './debitnote.component.html',
  styleUrls: ['./debitnote.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})




export class DebitnoteComponent implements OnInit {

  debitdata:any;


  ngOnInit(): void {
this.load();
  }

load(){
  this.debitdata = new FormGroup({
    date: new FormControl("",Validators.compose([Validators.required])),
    supplier : new FormControl("", Validators.compose([Validators.required])),
    purchaseinvoice: new FormControl("", Validators.compose([Validators.required])),
    doucmentno: new FormControl("",Validators.compose([Validators.required]))
  })
}

  save(data:any){
console.log(data);

  }
}
