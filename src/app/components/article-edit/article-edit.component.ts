import { Component, OnInit } from '@angular/core';
import { article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute, Params, Event } from '@angular/router';
import { Global } from 'src/app/services/global';
import { HttpResponse } from '@angular/common/http';
import swal from 'sweetalert'; 

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {

  public article !: article;
  public status !: string;
  public is_edit !: boolean;
  public page_title !: string;
  public url !: string;


  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpeg",
    maxSize: 50,
    uploadAPI: {
      url: Global.url + 'upload-image'
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube aqui tu archivo',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  };

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this.article = new article('', '', '', '', null);
    this.is_edit = true;
    this.page_title = 'Editar articulo';
    this.url = Global.url;

  }

  ngOnInit(): void {
    this.getArtcicle();
  }

  onSubmit() {



    this._articleService.update(this.article._id,this.article).subscribe(
      response => {

       // console.log("Se llego a response");
        this.status = 'success';
        //console.log(response.status);
        if (response.status == 'success') {

          //alerta
          swal(
            'Articulo editado!',
            'El articulo se ha editado correctament',
            'success'
          );

          this.article = response.article;
          this._router.navigate(['/blog/articulo', this.article._id]);

        } else {
          swal(
            'Error',
            'Edicion fallida, el articulo no se ha editado',
            'error'
          );
          this.status = 'error';
        }

      },
      error => {

        console.log(error);
        this.status = 'error';
      }
    );

  }

  imageUpload(data: any) {

    //alert(data.body.image);
    this.article.image = data.body.image;

  }

  getArtcicle(){
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
