import { Component, OnInit } from '@angular/core';
import { Icomments } from './imageinterface';
import { ImageService } from './imageservice.service';
import { PaginationService } from '../pagination.service';

@Component({
  selector: 'app-imagepaging',
  templateUrl: './imagepaging.component.html',
  styleUrls: ['./imagepaging.component.css']
})
export class ImagepagingComponent implements OnInit {

  start : number;
  limit : number;
  commentList: Icomments[];
  pagination: any = {};
  pagedItems: any[];

  constructor(private _commentService: ImageService, private pagerService: PaginationService) {
    this.start = 0;
    this.limit = 10;
  }
  updateLimit(val){
    this.limit=val;
    this.setPage(1);
  }
  ngOnInit() {
    this._commentService.commentFunction().subscribe((res:Icomments[]) =>{
      this.commentList = res;
      this.setPage(1);
    });
 }
 setPage(page: number) {
  if (page < 1 || page > this.pagination.totalPages) {
      return;
  }
  this.pagination = this.pagerService.getPager(this.commentList.length, page, this.limit);
  this.pagedItems = this.commentList.slice(this.pagination.startIndex, this.pagination.endIndex + 1);
  }
}
