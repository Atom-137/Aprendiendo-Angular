import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, observable } from "rxjs";
import { article } from "../models/article";
import { Global } from "./global";


@Injectable()
export class ArticleService {

    public url !: string;

    constructor(

        private _http: HttpClient
    ) {
        this.url = Global.url;
    }

    pruebas(){
        return "Soy el servicio articulo funcionando ";
    }

    getArticles(last: any = null):Observable<any>{
        var articles = 'articles';

        if(last != null){
            var articles = 'articles/true';
        }

        return this._http.get((this.url) + articles)

    }

}
