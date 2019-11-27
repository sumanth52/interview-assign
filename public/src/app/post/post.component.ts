import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  private products: any[];
  private postId: any;
  private postData: any[];
  private commentsData: any[];
  public showComments: boolean = true;
  constructor(private dataService: DataService, private route: ActivatedRoute, private _location: Location) { }

  ngOnInit() {

    this.route.paramMap.subscribe(data => {
      this.postId = data['params'].id;
    });
    const postUrl = 'posts/' + this.postId;
    this.dataService.getData(postUrl).subscribe((data: any[])=> {
      console.log(data);
      this.postData = data;
    });
    const commentUrl = 'comments?postId=' + this.postId;
    this.dataService.getData(commentUrl).subscribe((data: any[])=>{
      console.log(data);
      this.commentsData = data;
    });
  }

  deletePost() {
    const deleteUrl = 'posts/' + this.postId;
    this.dataService.deletePost(deleteUrl).subscribe((data: any[])=>{
      console.log(data);
      this._location.back();
    });

  }
}
