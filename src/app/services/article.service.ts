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

    getArticles():Observable<any>{

        return this._http.get((this.url) + 'articles')

    }

}
