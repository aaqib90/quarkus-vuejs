import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {

  }
  title = 'webapp';
  name: string;
  nameLength;
  changeInput(e) {
    console.log(e.target.value);
    this.name = e.target.value;
    this.http.get(`https://quarkus-ui.herokuapp.com/hello/string-length/${this.name}`)
    .pipe(first())
    .subscribe(
      (resp) => {
        console.log(resp);
        this.nameLength = resp;
      },
      (err) => {
        console.log(err)
      }
    )
  }
}
