import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SentencesService {

  private _sentencesUrl = "http://localhost:3000/"
  constructor(private http:HttpClient) { 
  }
    onGet(){
      return this.http.get<any>(this._sentencesUrl)
    }

    onDelete(id:string){
      return this.http.delete<any>(this._sentencesUrl+"sentences/"+id);
    }

    editSentence(sentence,id){
      return this.http.post<any>(this._sentencesUrl+"sentences/edit/"+id,sentence);
    }

    addSentence(sentence){
      return this.http.post<any>(this._sentencesUrl+"sentences/add",sentence);
    }

    getSentence(id:string){
      return this.http.get<any>(this._sentencesUrl+"sentences/"+id);
    }

    dashboardData(){
      return this.http.get<any>(this._sentencesUrl+"sentences/dashboard");
    }
  
}
