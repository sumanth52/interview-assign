import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts:Object;
  userId:any;
  userName:any;
  constructor(private route: ActivatedRoute, private dataService: DataService) {

  }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams)
    this.route.paramMap.subscribe((ParamAsMap: any) => {
      console.log(ParamAsMap);
      this.userId = ParamAsMap.params.id;
      this.userName = ParamAsMap.params.name;
    });
    const url = 'posts?userId='+ this.userId;
    this.dataService.getData(url).subscribe((data: any[]) =>{
      console.log(data);
      this.posts = data;
    });
  }

}
