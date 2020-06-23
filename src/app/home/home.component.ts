import { Component, OnInit } from '@angular/core';
import { CapiService } from '../capi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:any;
  constructor(private ds: CapiService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getData();
  }
  getData() {
    this.ds.getCon().subscribe((res)=>{
      this.data = res;
      console.log("Con", this.data);
    });
    }
}
