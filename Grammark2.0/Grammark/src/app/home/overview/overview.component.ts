import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  // Vars
  message: string;
  grade: number;
  passiveVoice: number;

  constructor(private router : Router, private data: DataService) {}



  startOverClick() : void {
    this.data.changeMessage('');
  }

  startOverClickButton() : void {
    this.data.changeMessage('');
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    // Input text
    this.data.currentMessage.subscribe(message => this.message = message);
    // Grade
    this.data.currentGrade.subscribe(grade => this.grade = grade);
    //
    this.data.currentPassiveVoice.subscribe(passiveVoice => this.passiveVoice = passiveVoice);

  }


}
