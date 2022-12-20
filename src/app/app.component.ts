import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularRouting';
  // For highliting active fragment in navbar
  activeFragment:any;
  displayLoadingIndicator:boolean=false;

  constructor(private router:Router ,private route:ActivatedRoute,private authService:AuthService){}
  ngOnInit(){
    // For navigating between fragments
    this.route.fragment.subscribe((value)=>{
      this.jumpTo(value);
    });

    this.router.events.subscribe((routerEvent:Event)=>{
      if(routerEvent instanceof NavigationStart){
        this.displayLoadingIndicator=true;
      }
      if(routerEvent instanceof NavigationEnd || 
        routerEvent instanceof NavigationCancel || 
        routerEvent instanceof NavigationError){
        this.displayLoadingIndicator=false;
      }
    });
  }

  jumpTo(section:any){
    // For highliting active fragment in navbar
    this.activeFragment=section==undefined?'Home':section ;
    //SPA : scrolling
    document.getElementById(section)?.scrollIntoView({behavior:'smooth'});
  }

  login(){
    this.authService.login();
  }

  logout(){
    this.authService.logout();
  }
}
