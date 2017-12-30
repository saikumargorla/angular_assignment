import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ImageService } from './services/serviceurl/urlservice.service'

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ImagepagingComponent } from './services/imagepaging/imagepaging.component';
import { PaginationService } from './services/pagination.service';
//import { ImageService } from './services/imagepaging/imageservice.service';
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { MyInterceptor } from './services/urlforservice/myinterceptor';
import { ImageServices } from './services/urlforservice/urlservice.service';
import { FormsModule } from '@angular/forms';
import { CommentComponent } from './services/comments/comments.component';
import { CommentService } from './services/comments/commentservice.service';
import { ServiceurlComponent } from './services/serviceurl/serviceurl.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ImagepagingComponent,
    CommentComponent,
    ServiceurlComponent
    
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserModule,
    RouterModule.forRoot([
      {path:'welcome',component:WelcomeComponent},
      {path:'students',component:DashboardComponent},
      {path:'imagepaging', component : ImagepagingComponent},
      {path:'comments', component : CommentComponent},
      {path:'albums', component : ServiceurlComponent},
      
      
      //{path:'',redirectTo:'welcome',pathMatch:'full'}
      
    ])
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true},CommentService,HttpModule,HttpClientModule,PaginationService,ImageService, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
