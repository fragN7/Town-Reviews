import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {

  private URL = 'https://localhost:7197/api';
  constructor(private http: HttpClient, private router: Router) {}

  getItems(){
    return this.http.get<any[]>(`${this.URL}/items`);
  }

  getItem(id: number){
    return this.http.get<any>(`${this.URL}/items/${id}`)
  }

  postReview(id: number, name: string, rating: number, feedback: string){

    const body = {
      name: name,
      rating: rating,
      feedback: feedback
    }

    return this.http.post<any>(`${this.URL}/review/${id}`, body);
  }

}
