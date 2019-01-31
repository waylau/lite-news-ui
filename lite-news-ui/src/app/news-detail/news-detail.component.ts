import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'; // 用于回退浏览记录

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  // 返回
  goback() {
    // 浏览器回退浏览记录
    this.location.back();
  }
}
