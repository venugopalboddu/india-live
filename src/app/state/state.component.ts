import { Component, OnInit } from '@angular/core';
import { CapiService } from '../capi.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  sdata:any;
  dis:any;
  dataIs:any;
  show:boolean = false;
  constructor(private ds: CapiService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getStates();
  }
  getStates(){
    this.ds.getSt().subscribe((resp)=>{
     this.sdata = resp;
     //console.log("State", this.sdata);
    });
  }

}
