import { Injectable } from '@angular/core';
import { technologie } from '../models/technologie';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  get: any;
  addApp(arg0: { publishdate: string; }): AppService {
    throw new Error('Method not implemented.');
  }
  AppService(arg0: { publishdate: string; }): AppService {
    throw new Error('Method not implemented.');
  }
  groupe(arg0: {}): AppService {
    throw new Error('Method not implemented.');
  }
  geturls(): {}[] {
    throw new Error('Method not implemented.');
  }

  private apps: technologie[] = [];
  deleteApp: any;
  private _pub = [{}];
  urls: [{}] | undefined;
  public get pub() {
    return this._pub;
  }
  public set pub(value) {
    this._pub = value;
  }

  constructor() { }


createApps(app: technologie){ 
  const newApp = {id: Date.now(),...app};
  this.apps = [newApp,...this.apps],
  console.log(this.apps);
}

getApps(): technologie[]{
  return this.apps

}

deleteApps(app: technologie) {
  this.apps = this.apps.filter(t => t.id !== app.id); 

}
}
