import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { article } from 'src/app/models/article';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {


  public article !: article;
  public url: string;

  constructor(
    public _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router

  ) {
    this.url = Global.url
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];

      this._articleService.getArticle(id).subscribe(
        response => {
          if (response.article) {
            this.article = response.article;
          } else {
            this._router.navigate(['/home']);
          }
        },
        error => {
          this._router.navigate(['/home']);
          console.log(error);
        }

      );
    });
  }


}
