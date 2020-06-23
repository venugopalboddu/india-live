import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CapiService } from '../capi.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {

  sdata:any;
  dis:any;
  dataIs:any;
  st:any;
  constructor(private ar: ActivatedRoute, private ds: CapiService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    //console.log(this.ar.snapshot.params.state);
    var m = this.ar.snapshot.params.state;
    this.st = m;

    this.ds.getDt().subscribe((resp)=>{
      this.sdata = resp;
      //console.log("State", this.sdata);

      this.dataIs = this.sdata.find(x => x.state === m);
      //console.log(this.dataIs);
      this.dis = Array.of(this.dataIs);
      //console.log("TeD", this.dis);

     });
  }

}
