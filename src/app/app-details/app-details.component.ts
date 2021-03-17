import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { technologie } from '../models/technologie';

@Component({
  selector: 'app-app-details',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.css']
})
export class AppDetailsComponent implements OnInit {
  publishdate = [];
  
  @Input() tech: any;
  @Output() deleteTech = new EventEmitter<technologie>();


  constructor() { }

  ngOnInit(): void {
  }

  delete(Tech: technologie) {
    console.log('delete', Tech);
    this.deleteTech.emit(Tech);
  }
  

}
