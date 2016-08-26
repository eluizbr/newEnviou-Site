import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FooterService {

    footerUrl = 'app/layout/footer/footer.json'
    constructor(private _http:Http) { }

    getFooter() {
        return this._http.get(this.footerUrl)
                    .toPromise();
    }
}