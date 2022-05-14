import { Component, OnInit } from '@angular/core';
import Cycle from './course/cycle';
import {formatDate} from '@angular/common';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-ranger-schedule',
  templateUrl: './ranger-schedule.component.html',
  styleUrls: ['./ranger-schedule.component.css']
})
export class RangerScheduleComponent implements OnInit {
  currentDate: Date;
  cycleList: Array<Cycle>;
  activeCycleList: Array<Cycle>;
  activities: string;
  formattedDate: string;
  title = 'whatismyrangerdoingtoday';

  constructor() {
    this.currentDate = new Date();
    this.cycleList = [
      new Cycle("03-22", new Date(2022, 0, 9), new Date(2022, 2, 11)),
      new Cycle("04-22", new Date(2022, 0, 30), new Date(2022, 3, 1)),
      new Cycle("05-22", new Date(2022, 1, 20), new Date(2022, 3, 22)),
      new Cycle("06-22", new Date(2022, 3, 17), new Date(2022, 5, 17)),
      new Cycle("07-22", new Date(2022, 4, 15), new Date(2022, 6, 15)),
      new Cycle("08-22", new Date(2022, 5, 19), new Date(2022, 7, 19)),
      new Cycle("09-22", new Date(2022, 6, 17), new Date(2022, 8, 16)),
      new Cycle("10-22", new Date(2022, 7, 14), new Date(2022, 9, 14)),
      new Cycle("11-22", new Date(2022, 8, 13), new Date(2022, 10, 11)),
    ]

    this.activeCycleList = this.getActiveCycleList();

    this.activities = this.getActivities();

    this.formattedDate = this.formatDate();
  }

  getActivities() {
    // return this.cycleList[0].getDayForDate(this.currentDate).toString()
    return "";
  }

  getActiveCycleList() {
    return this.cycleList.filter(
      cycle => cycle.isDateInCycle(this.currentDate)
    );
  }

  formatDate() {
    return formatDate(this.currentDate,'longDate','en-US');
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(type, event);
    if (event.value != null) {
      this.currentDate = event.value;
      this.activeCycleList = this.getActiveCycleList();
      this.activities = this.getActivities();
      this.formattedDate = this.formatDate();
      console.log(this.currentDate);
    }
  }

  ngOnInit(): void {
  }

}
