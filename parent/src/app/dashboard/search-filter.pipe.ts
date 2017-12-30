import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(students: any,term: any): any {
    
       if(term==undefined) return students;
       return students.filter(function(students){
         return students.Name.toLowerCase().indexOf(term.toLowerCase())>-1;
       })
       //return null;
       
     }
   
}
