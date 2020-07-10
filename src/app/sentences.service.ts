import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sentences } from '../app/models/sentences.model';

@Injectable({
  providedIn: 'root'
})
export class SentencesService {

  private _sentencesUrl = "http://localhost:4000/"
  sentences : Sentences[];
  constructor(private http:HttpClient) { 
  }
    onGet(){
      return this.http.get<any>(this._sentencesUrl)
    }
  
}
