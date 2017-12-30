import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../pagination.service';
import { ImageService } from '../imagepaging/imageservice.service';
import {ImageServices} from './urlservice.service'
import { Iphotos } from './servicemodel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-urlforservice',
  templateUrl: './urlforservice.component.html',
  styleUrls: ['./urlforservice.component.css']
})
export class UrlforserviceComponent implements OnInit {
  _imageServices: any;

  start : number;
  limit : number;
  imageList: Iphotos[];
  currenturl : string;
  pagination: any = {};
  pagedItems: any[];

  constructor(private _imageService: ImageService, private pagerService: PaginationService) {
    this.start = 0;
    this.limit = 10;
  }
  updateLimit(val){
    this.limit=val;
    this.setPage(1);
  }
  currentImage(currenturl){
    this.currenturl=currenturl;
  }
  ngOnInit() {
    this._imageServices.imageFunction().subscribe((res:Iphotos[]) =>{
      this.imageList = res;
      this.setPage(1);
    });
 }
 setPage(page: number) {
  if (page < 1 || page > this.pagination.totalPages) {
      return;
  }
  this.currenturl='';
  this.pagination = this.pagerService.getPager(this.imageList.length, page, this.limit);
  this.pagedItems = this.imageList.slice(this.pagination.startIndex, this.pagination.endIndex + 1);
  }
}
