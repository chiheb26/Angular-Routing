import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  editMode:boolean=false;
  constructor(private router: Router ,private route: ActivatedRoute,private service : CoursesService) { }

  ngOnInit(): void {
    // if the value of the param is static (not going to change over the time)
    //this.courseId = this.route.snapshot.paramMap.get('id'); 
    // old approach
    //this.courseId = this.route.snapshot.params['id'];
    //this.course = this.service.courses.find(c=>c.id==this.courseId);

    // if the value of the param is going to change over the time
    
    this.routeParamObs=this.route.paramMap.subscribe((param)=>{
      this.courseId=param.get('id');
      this.course=this.service.courses.find(c=>c.id==this.courseId);
    }); 
// if the value of the queryParam is static (not going to change over the time)
        //this.editMode=Boolean(this.route.snapshot.queryParamMap.get('edit'));
    
     // if the value of the queryParam is going to change over the time
    
    this.route.queryParamMap.subscribe(param=>{
      this.editMode=Boolean(param.get('edit'));
    });
      
  
  
  }
  ngOnDestroy(){
    this.routeParamObs.unsubscribe();
  }
  appendQueryParam() {
    this.router.navigate(['/Courses/Course',this.courseId],{queryParams:{edit:true}});
  }
}
 