import { Component, Input, OnInit } from '@angular/core';
import { article } from 'src/app/models/article';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  public url: string;
  @Input() articles !: article[];


  constructor() {
    this.url = Global.url;
  }

  ngOnInit(): void {
  }

}
