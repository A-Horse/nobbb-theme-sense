import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'categorys',
  templateUrl: './categorys.component.html',
  styleUrls: [ './categorys.component.css' ]
})
export class CategorysPage implements OnInit {
  constructor(private http: Http) { }

  categorys = [];

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:8077/categorys.json')
        .toPromise()
        .then(response => {
          this.categorys = response.json();
        });
  }
}
