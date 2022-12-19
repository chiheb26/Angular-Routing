import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateToHome() {
    //this.router.navigate(['Home']); // always use the absolute path
    this.router.navigate(['Home'],{relativeTo:this.route}); // to use relative path , use {relativeTo:this.route}
    //this.router.navigateByUrl('Home'); // always use the absolute path
     }

}
