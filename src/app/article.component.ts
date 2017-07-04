import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: [ './article.component.css' ]
})
export class ArticlePage implements OnInit {
  constructor(private http: Http,
              private route: ActivatedRoute,
              private location: Location
  ) { }

  article = {};

  ngOnInit(): void {
    this.route.params
        .switchMap((params: Params) =>
          this.http.get(
            `http://127.0.0.1:8077/${params['categoryName']}/${params['articleName']}.json`
          ).toPromise()
           .then(response => response.json()))
           .subscribe(res => this.article = res);
  }
}
