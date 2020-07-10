import { Component, OnInit } from '@angular/core';
import { SentencesService } from '../sentences.service';
import { Sentences } from '../models/sentences.model';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {
  sentences: any;
  constructor(private _sentence:SentencesService) {

   }

  ngOnInit(): void {
     this._sentence.onGet().subscribe(
      res => {this.sentences = res;
      console.log(res)},
      error => console.error('Error!', error)
    );
  }

}
