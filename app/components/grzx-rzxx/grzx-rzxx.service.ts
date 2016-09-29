import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import { Grzxrzxxlb } from '../hero/hero';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GrzxrzxxService {
    constructor(private http: Http) {}
    getGrzxrzxxlb() {
        return this.http.get('../../../data/grzxrzxxlb.json')
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}