import { Injectable } from '@angular/core';  
import { Icomments } from './imageinterface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ImageService {
    constructor(private http: HttpClient){
    }
    commentFunction(){
        const url = 'https://jsonplaceholder.typicode.com/comments/';
        return this.http.get<Icomments[]>(url);
    }
}
