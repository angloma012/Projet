import { Injectable } from '@angular/core';
import { technologie } from '../models/technologie';

@Injectable({
  providedIn: 'root'
})
export class TechnoService {
 private technos: technologie[] = [];

  
  constructor() { 
  
    
  }

  createTechno(techno: technologie) {
    const newTechno = {id: Date.now(), ...techno};
    this.technos = [newTechno,...this.technos];
    console.log(this.technos);
    
  }

  getTechnos(): technologie[]{
    return this.technos;
  }

  deleteTechno(techno: technologie) {
    this.technos = this.technos.filter(t => t.id !== techno.id); 
  }
}
