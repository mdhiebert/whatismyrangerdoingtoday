import { Component, OnInit } from '@angular/core';
import { RangerScheduleComponent } from '../ranger-schedule/ranger-schedule.component';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.css']
})
export class LettersComponent implements OnInit {

  firstName: string;
  lastName: string;
  rank: string;
  class: string;
  company: string;

  rankList = [
    "PVT",
    "PV2",
    "PFC",
    "SPC",
    "CPL",
    "SGT",
    "SSG",
    "SFC",
    // "MSG",
    // "1SG",
    // "SGM",
    // "CSM",
    // "WO1",
    // "CW2",
    // "CW3",
    // "CW4",
    // "CW5",
    "2LT",
    "1LT",
    "CPT",
    // "MAJ",
    // "LTC",
    // "COL"
  ]

  cycleList = new RangerScheduleComponent().cycleList;

  companyList = [
    "A",
    "B",
    "C"
  ]


  constructor() {
    this.firstName = "";
    this.lastName = "";
    this.rank = "";
    this.class = "";
    this.company = "";
  }

  ngOnInit(): void {
  }

}
