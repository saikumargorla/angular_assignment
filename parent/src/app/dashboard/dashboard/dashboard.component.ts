import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  students:any[];
  
  constructor (){

  }


  ngOnInit() {
    this.students = this.getstudents();
    console.log(this.students)
      }
      getstudents():any[]{
        return [ 
       { 
          "Name" : "saikumar", 
          "branch" : "IT", 
          "percentage" : "80"     
        }, 
        { 
          "Name" : "anvesh",
          "branch" : "cse", 
          "percentage" : "80" 
        }, 
        { 
          "Name" : "venkatesh", 
          "branch" : "IT", 
          "percentage" : "80"
        }, 
        { 
          "Name" : "vinay", 
          "branch" : "IT", 
          "percentage" : "80"
        }, 
        { 
          "Name" : "ashish", 
          "branch" : "IT", 
          "percentage" : "80"
        }, 
        { 
          "Name" : "sravan", 
          "branch" : "IT", 
          "percentage" : "80"
        },
        { 
          "Name" : "akhil", 
          "branch" : "IT", 
          "percentage" : "80"
        }, 
        { 
          "Name" : "nihal", 
          "branch" : "IT", 
          "percentage" : "80"
        }, 
        { 
          "Name" : "soujanya", 
          "branch" : "IT", 
          "percentage" : "80"
        }, 
        { 
          "Name" : "sandeep", 
          "branch" : "IT", 
          "percentage" : "80"
        }, 
        { 
          "Name" : "chaithanya", 
          "branch" : "IT", 
          "percentage" : "80" 
        }, 
        { 
          "Name" : "ganesh", 
          "branch" : "IT", 
          "percentage" : "80"
        }, 
        { 
          "Name" : "likhitha", 
          "branch" : "IT"
        },     
        { 
          "Name" : "anurag", 
          "branch" : "IT", 
          "percentage" : "80" 
        } 
      ] 
      }
}

