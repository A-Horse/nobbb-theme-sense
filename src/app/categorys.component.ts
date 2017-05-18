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

  ngOnInit(): void {
    this.http.get('/build/categorys.json')
          .toPromise()
          .then(response => console.log(response))
  }
}
