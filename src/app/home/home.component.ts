import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service'
import { technologie } from '../models/technologie';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allApps = [{}];

  
 
  private _pub = [];
  
  public get pub() {
    return this._pub;
  }
  public set pub(value) {
    this._pub = value;
  }

  constructor(private ts: AppService) { }

  ngOnInit(): void { 

({ 
startdate: 'new Date()',
publishdate: 'new Date()',
lastupdate: 'new Date()'  
}); 



    this.getApps();
  }
  publishidate= [{}];
    urls=[{}];


  onselectFile(a:any){
    if(a.target.files){
      for(let i=0; i<File.length; i++){
      var reader = new FileReader();
      reader.readAsDataURL(a.target.files[i]);
      reader.onload=(events:any)=>{
        this.urls.push(events.target.result);
        }
      }
    }
  }

  addApp(form: { value: any; reset: () => void; }) {
    console.log(form.value);
    this.ts.createApps(form.value);
    form.reset();
  }
  

  

getApps() {
  this.allApps = this.ts.getApps();
}

geturls(){
  this.urls = this.ts.geturls();
}

deleteApp(app: technologie) {
  console.log('deleteApp', app);
  this.ts.deleteApp(app);
  this.allApps = this.ts.getApps();
}
}
