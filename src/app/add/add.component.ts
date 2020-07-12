import { Component, OnInit } from '@angular/core';
import { SentencesService } from '../sentences.service';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  sentenceForm:FormGroup;
  sentence: any;
  constructor(private fb:FormBuilder,private _sentence:SentencesService, private _router:Router,private _aroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.sentenceForm = this.fb.group({
      title: ['',Validators.required],
      body: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(50),Validators.pattern('(.+ .)|(. .+)')]]
    });

    this._aroute.paramMap.subscribe(params => {
      const id = params.get('id');
      if(id){
        this.getSentence(id);
      }
    });
  }

  get title() {
    return this.sentenceForm.get('title');
  }

  get body() {
    return this.sentenceForm.get('body');
  }

  getSentence(id: string){
     this._sentence.getSentence(id).subscribe(
       res => {
         this.sentence = res;
         this.editSentence(this.sentence)
        },
       error => console.error('Error!', error)
     );
  }

  editSentence(sentence:any){
    this.sentenceForm.patchValue({
      title: sentence.title,
      body: sentence.body
    });
  }
  
  onSubmit() {
    let id = this._aroute.snapshot.params.id;
    console.log(this.sentenceForm.value);
    if(id){
      this._sentence.editSentence(this.sentenceForm.value,id)
      .subscribe(
        res =>{
          this._router.navigate(['/special'])
          console.log(res)},
        error => console.error('Error!', error)
      );
    }else{
      this._sentence.addSentence(this.sentenceForm.value)
      .subscribe(
        res =>{
          this._router.navigate(['/special'])
          console.log(res)},
        error => console.error('Error!', error)
      );
    }
    
  }

}


