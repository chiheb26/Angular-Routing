import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit,OnDestroy {

  course?:any;
  courseId?:any;
  routeParamObs:any;
  constructor(private route: ActivatedRoute,private service : CoursesService) { }

  ngOnInit(): void {
    //this.courseId = this.route.snapshot.paramMap.get('id'); // if the value of the param is static (not going to change over the time)
    //this.courseId = this.route.snapshot.params['id'];// old approach
    //this.course = this.service.courses.find(c=>c.id==this.courseId);
    this.routeParamObs=this.route.paramMap.subscribe((param)=>{
      this.courseId=param.get('id');
      this.course=this.service.courses.find(c=>c.id==this.courseId);
    }); // if the value of the param is going to change over the time
  }
ngOnDestroy(){
  this.routeParamObs.unsubscribe();
}
}
 