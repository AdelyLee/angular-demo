import { Injectable } from '@angular/core';
import { Headers,Http,Response,RequestOptions} from '@angular/http';
import { Zdylm } from '../../components/hero/hero';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ZdylmService {
    constructor(private http: Http) {}
    getZdylm() {
        return this.http.get('../../../data/zdylm.json')
            .map(this.extractData)
            .catch(this.handleError);
    }
   delete(lmname:string){
    	let headers = new Headers();
    	headers.append('Content-Type','application/json');
        let url= `${'../../../data/zdylm.json'}/${lmname}`;
       console.log(url);
       return this.http.delete(url,{headers:headers})
            .map(this.extractData)
            .catch(this.handleError);
   }
    //添加
    addZdylm (lmname: string): Observable<Zdylm> {
    let body = JSON.stringify({ lmname });
    let url= `${'../../../data/zdylm.json'}`;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, body, options)
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