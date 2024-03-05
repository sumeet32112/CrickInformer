import { Component, NgModule, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-point-table',
  standalone: true,
  imports: [NgClass],
  templateUrl: './point-table.component.html',
  styleUrl: './point-table.component.css'
})
export class PointTableComponent implements OnInit{
  public pointTable:any;
  tableHeading:any;
  constructor(private apis:ApiCallService){}
  ngOnInit(): void {
    this.apis.getPointTable().subscribe({
      next:data=>{
        this.pointTable = data;
        this.tableHeading = [...this.pointTable[0]]
      },
      error:error=>{
        console.log(error)
      }
    })
  }
}
