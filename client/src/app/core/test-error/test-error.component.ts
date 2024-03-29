import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent implements OnInit {
  apiUrl = environment.apiUrl
  validationErrors: any

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  get404Error() {
    this.http.get(this.apiUrl + 'products/42').subscribe(res => {
      console.log(res);
    }, error => console.log(error));
  }

  get500Error() {
    this.http.get(this.apiUrl + 'bugs/servererror').subscribe(res => {
      console.log(res);
    }, error => console.log(error));
  }

  get400Error() {
    this.http.get(this.apiUrl + 'bugs/badrequest').subscribe(res => {
      console.log(res);
    }, error => console.log(error));
  }

  get400ValidationError() {
    this.http.get(this.apiUrl + 'products/fourtytwo').subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
      this.validationErrors = error.errors;
    });
  }

}
