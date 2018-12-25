import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl:string = 'https://comicvine.gamespot.com/api';
  issuesOption:string = '/issues'
  url:string = 'https://';
  apikey:string = '?apikey=6501e49837b61d47f4bb33508909218856619457';
  constructor(private http: HttpClient) { }

  getComics() {
    return this.http.get("https://localhost:44393/api/Default");
  }
}
