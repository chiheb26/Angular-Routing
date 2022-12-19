import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularRouting';
  activeFragment:any;
  constructor(private route:ActivatedRoute){}
  ngOnInit(){
    this.route.fragment.subscribe((value)=>{
      this.jumpTo(value);
    });
  }

  jumpTo(section:any){
    this.activeFragment=section==undefined?'Home':section;
    document.getElementById(section)?.scrollIntoView({behavior:'smooth'});
  }
}
