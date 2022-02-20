import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: ArticleComponent },
  { path: 'create', component: CreateArticleComponent },
  { path: 'detail', component: CreateArticleComponent },
  { path: 'list', component: ListArticleComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
