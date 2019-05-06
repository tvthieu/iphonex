import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-newapp',
  templateUrl: './newapp.component.html',
  styleUrls: ['./newapp.component.css']
})
export class NewappComponent implements OnInit {
  httpOptions;
  body = {
    url: '',
    linkUrl: 'fb'
  };
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // $('body').on('click touchstart', function() {
    //   if (  document.getElementById('mySidebar').style.display  = 'block' ) {
    //     document.getElementById('mySidebar').style.display = 'none';
    //   }
    // });
  }
  shortLink() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'HEAD, GET, POST, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
      })
    };
    console.log(this.http.post('https://myshortlink.herokuapp.com/', this.body));
    this.http.post('https://myshortlink.herokuapp.com/', this.body)
      .subscribe(
        user => this.popup(user),
        err => this.popup(err.error)
      );
  }
  popup(e) {
    console.log(e.data);
  }
}
