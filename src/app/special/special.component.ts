import { Component, OnInit } from '@angular/core';
import { SentencesService } from '../sentences.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {
  sentences: any;
  constructor(private _sentence:SentencesService,
    private _router:Router,public _authService:AuthService ) {

   }

  ngOnInit(): void {
     this.getSentence();
  }

  getSentence(){
    this._sentence.onGet().subscribe(
      res => {this.sentences = res;
      console.log(res)},
      error => console.error('Error!', error)
    );
  }

  deleteSentence(id:string){
    if(confirm("Are you sure ?"))
    {
      this._sentence.onDelete(id).subscribe(
        res =>{
          this.getSentence();
          console.log(res)},
          err => console.log(err)
      )
    }
  }

  editSentence(id:string)
  {
    this._router.navigate(['/edit',id])
  }

}
