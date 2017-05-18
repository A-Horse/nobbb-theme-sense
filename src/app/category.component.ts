import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: [ './category.component.css' ]
})
export class CategoryPage implements OnInit {
  constructor(private http: Http,
              private route: ActivatedRoute,
              private location: Location
  ) { }

  category = {};


  ngOnInit(): void {
    console.log(
      this.route.params
    );
    this.route.params
        .switchMap((params: Params) => this.http.get(`http://127.0.0.1:8077/${params['name']}/index.json`).toPromise().then(response => response.json()))
        .subscribe(res => this.category = res);


  }
}
