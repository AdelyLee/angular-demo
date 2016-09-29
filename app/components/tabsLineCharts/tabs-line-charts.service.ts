/**
 * 在当前service中封装 Solr 查询参数。
 */
import {Injectable} from '@angular/core';
import {ConnectUrls} from '../../utils/ConnectUrls';
import {QueryUtil} from "../../utils/Query";

@Injectable()
export class TabsChartsService {
    httpUrl = ConnectUrls.solrUrl + "/statistic/trend.json";

    constructor(private query: QueryUtil) {
    }

    getData(queryParam, successCallBack, failedCallBack) {
        var param = {url: "", data:{}, type: ""};
        param.data = queryParam;
        param.type = "get";
        param.url = this.httpUrl;
        this.query.query(param, successCallBack, failedCallBack);
    }
}