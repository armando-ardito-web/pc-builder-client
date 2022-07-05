import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {AfterViewInit, ElementRef, ViewChild} from '@angular/core';


import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  public endpoint = "http://localhost:8000/api"; // endpoint URL
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  name:any;


  ngOnInit(): void {
    let input = document.querySelector("#input");
  }

r:any;
  ricerca(s: String): any{
    this.httpClient
        .post(this.endpoint+'/vendor-search',{'name':s})
        .subscribe((response=>{
          console.log(response); //DEBUG
          this.r=response;
          return this.r;
        }));
  }
}
