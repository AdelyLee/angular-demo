import {
    Component,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'bread-line',
    templateUrl: 'app/components/breadLine/bread-line-component.html',
    styleUrls:  ['app/components/breadLine/bread-line.component.css']
})
export class BreadLineComponent {
    pageName:string;
    
    constructor(private router: Router) {
        this.getPagename();
    }
    
    getPagename() {
        var url = this.router.url.split('/')[1];
        switch(url) {
            case 'index':
                this.pageName = "控制台";
                break;
            case 'qjyq':
                this.pageName = "全景舆情";
                break;
            /*case 'yqbj':
                this.pageName = "舆情报警";
                break;*/
            case 'sjjc':
                this.pageName = "事件检测";
                break;
            case 'keyword':
                this.pageName = "关键词设置";
                break;
            case 'zdylm':
                this.pageName = "自定义栏目设置";
                break;
            case 'grzx':
                this.pageName = "个人信息";
                break;
            case 'tc':
                this.pageName = "套餐信息";
                break;
            case 'help':
                this.pageName = "帮助中心";
                break;
            case 'labelgl':
                this.pageName = "标签管理";
                break;
                case 'yqyj':
                this.pageName = "舆情预警";
                break;
            case 'yjsz':
                this.pageName = "舆情预警>预警设置";
                break;
            case 'sjjc':
                this.pageName = "事件监测";
                break;
            case 'jryq':
                this.pageName = "专项分析  > 今日舆情";
                break;
            case 'bzyq':
                this.pageName = "专项分析 > 本周舆情";
                break;
            case 'byyq':
                this.pageName = "专项分析 > 本月舆情";
                break;
            case 'aqscjdj':
                this.pageName = "专项分析 > 分类舆情 > 企业巡查 > 安全生产监督局";
                break;
            case 'hyxw':
                this.pageName = "专项分析 > 分类舆情 > 行业新闻 > 行业新闻";
                break;
            default:
                this.pageName = "主页";
                break;
        }
    }
    goHome() {
        this.router.navigateByUrl("/index");
    }
}