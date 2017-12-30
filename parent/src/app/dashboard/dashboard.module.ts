import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchFilterPipe } from './search-filter.pipe';
import{FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
   FormsModule 
  ],
  declarations: [DashboardComponent, SearchFilterPipe],
  exports: [DashboardComponent,FormsModule,SearchFilterPipe,HttpClientModule]
})
export class DashboardModule { }
