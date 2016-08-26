import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BannerLayoutService {

    private layoutUrl = 'app/layout/banner/banner.json';

    constructor(private _http:Http) { }

    getMenuLayout(){
        return this._http.get(this.layoutUrl)
                    .toPromise()
    }
}