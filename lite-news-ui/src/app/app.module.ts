import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MarkdownModule } from 'ngx-markdown';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { NewsComponent } from './news/news.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsDetailComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // 动画模块
    MatButtonModule, // 按钮模块
    MatListModule, // 用于新闻列表
    MatCardModule, // 用于新闻详情
    HttpClientModule, // HTTP客户端
    MatFormFieldModule, // Form表单
    MatInputModule, // Input
    MarkdownModule.forRoot() // Markdown渲染
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
