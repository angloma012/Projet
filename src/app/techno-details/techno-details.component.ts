import { Component, Input, Output,EventEmitter, OnInit } from '@angular/core';
import { technologie } from '../models/technologie';

@Component({
  selector: 'app-techno-details',
  templateUrl: './techno-details.component.html',
  styleUrls: ['./techno-details.component.css']
})
export class TechnoDetailsComponent implements OnInit {
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
