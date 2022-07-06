import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private httpClient: HttpClient, private route:ActivatedRoute) { }

  public endpoint = "http://localhost:8000/api"; // endpoint URL
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  name:any;
  r:any;
  searchTerm:String="";

  ngOnInit(): void {

    //quando ci sono i params messi
    this.route.queryParamMap.subscribe((params)=>{

      let p = params.get("searchTerm");
      console.log("I PARAMS SONO "+ p);//DEBUG
      if (p!=null){
        if(p.toString()!=""){
        let s = p.toString(); //DA SANIFICARE

        this.httpClient.post(this.endpoint+'/vendor-search',{'name':s}).subscribe((response=>{
          console.log(response); //DEBUG
          this.r=response;
        }));
      }}

    });
  }


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
