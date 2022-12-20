import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../Services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private route:ActivatedRoute ,private coursesService: CoursesService) { }

  courses:any = [];

  ngOnInit(): void {
    //this.coursesService.getAllCourses().then((data)=>{
    //  this.courses=data;
    //});

    this.courses=this.route.snapshot.data['courses'];
  }

}
