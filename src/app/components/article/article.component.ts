import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { article } from 'src/app/models/article';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from 'src/app/services/global';
import swal from 'sweetalert'; 

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

  delete(id: any) {

    swal({
      title: "Estas seguro?",
      text: "Una vez borrado, el articulo no se recuperara",
      icon: "warning",
      buttons: [true,true],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {

        this._articleService.delete(id).subscribe(
          response => {
            swal("El articulo se ha elilminado correctamente", {
              icon: "success",
            });
            this._router.navigate(['/blog']);
          },
          error => {
            console.log(error);
            this._router.navigate(['/blog']);
          }
        );

      } else {
        swal("No se realizaron cambios");
        this._router.navigate(['/blog']);
      }
    });
    
  }

}
