import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-newapp',
  templateUrl: './newapp.component.html',
  styleUrls: ['./newapp.component.css']
})
export class NewappComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // $('body').on('click touchstart', function() {
    //   if (  document.getElementById('mySidebar').style.display  = 'block' ) {
    //     document.getElementById('mySidebar').style.display = 'none';
    //   }
    // });
  }
}
