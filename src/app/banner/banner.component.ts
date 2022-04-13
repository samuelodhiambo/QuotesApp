import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  reset(myform: NgForm){
    myform.reset()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
