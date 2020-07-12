import { Component, OnInit } from '@angular/core';
import { SentencesService } from '../sentences.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboardData: any;
  constructor(private _sentence:SentencesService) { }

  ngOnInit(): void {
    this.getDashboard();
  }

  getDashboard(){
    this._sentence.dashboardData().subscribe(
      res => {this.dashboardData = res;
      console.log(res)},
      error => console.error('Error!', error)
    );
  }

}
