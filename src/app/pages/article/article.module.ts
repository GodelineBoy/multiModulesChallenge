import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { SignupComponent } from './signup/signup.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { DetailsArticleComponent } from './details-article/details-article.component';
import { ListArticleComponent } from './list-article/list-article.component';


@NgModule({
  declarations: [
    ArticleComponent,
    SignupComponent,
    CreateArticleComponent,
    DetailsArticleComponent,
    ListArticleComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
