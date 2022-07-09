import { Component, OnInit } from '@angular/core';
import { article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute, Params, Event } from '@angular/router';
import { Global } from 'src/app/services/global';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {

  public article !: article;
  public status !: string;

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

  }

  ngOnInit(): void {
  }

  onSubmit() {



    this._articleService.create(this.article).subscribe(
      response => {

       // console.log("Se llego a response");
        this.status = 'success';
        //console.log(response.status);
        if (response.status == 'success') {

          this.article = response.article;
          this._router.navigate(['/blog']);

        } else {
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
}
