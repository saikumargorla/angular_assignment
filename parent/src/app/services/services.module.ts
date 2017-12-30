import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommentComponent } from './comments/comments.component';
import { CommentService } from './comments/commentservice.service';
import { ServiceurlComponent } from './serviceurl/serviceurl.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ServiceurlComponent],
  providers: [CommentService]
})
export class ServicesModule { }
