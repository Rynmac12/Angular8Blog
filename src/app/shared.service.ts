import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  blogTitle = "Angular8 blog";
  baseUrl = "http://localhost:4200/"

constructor() { }

}
