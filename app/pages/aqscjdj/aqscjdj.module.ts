/**
 * Created by topcom on 2016/9/8.
 */
import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {TabsModule}    from 'ng2-bootstrap/components/tabs';
import {AqscjdjComponent} from './aqscjdj.component';
import {aqscjdjRouting}   from './aqscjdj.routing';
import {BreadLineModule} from '../../components/breadLine/bread-line.module';
//文章列表部分
//筛选设置
import {JryqArticlesListOptionModule} from '../../components/jryqArticlesListOption/jryqArticlesListOption.module';
//文章主体内容
import {ArticlesSortModule} from '../../components/articlesSort/articlesSort.module';
import {DropdownJudgedModule} from '../../components/dropdownJudged/dropdownJudged.module';
import {DropdownClassifyModule} from '../../components/dropdownClassify/dropdownClassify.module';
import {DropdownWarningModule} from '../../components/dropdownWarning/dropdownWarning.module';
import {DropdownArticlesOutModule} from '../../components/dropdownArticlesOut/dropdownArticlesOut.module';
import {JryqArticlesListConentModule} from '../../components/jryqArticlesListConent/jryqArticlesListConent.module';

// 图表分析部分
//载体趋势图分析
import {JryqZtqstTopModule} from '../../components/jryqZtqstTop/jryqZtqstTop.module';
import {JryqZtqstLineModule} from '../../components/jryqZtqstLine/jryqZtqstLine.module';
import {JryqZtqstTableModule} from '../../components/jryqZtqstTable/jryqZtqstTable.module';

//载体分布统计图
import {JryqZtfbPieModule} from '../../components/jryqZtfbPie/jryqZtfbPie.module';
import {JryqZtfbTableModule} from '../../components/jryqZtfbTable/jryqZtfbTable.module';


//文章属性统计
import {JryqWzsxtjTopModule} from '../../components/jryqWzsxtjTop/jryqWzsxtjTop.module';
import {JryqWzsxtjBarModule} from '../../components/jryqWzsxtjBar/jryqWzsxtjBar.module';
import {JryqWzsxtjTableModule} from '../../components/jryqWzsxtjTable/jryqWzsxtjTable.module';



//站点分布TOP10
import {JryqZdfbTopModule} from '../../components/jryqZdfbTop/jryqZdfbTop.module';
import {JryqZdfbBarModule} from '../../components/jryqZdfbBar/jryqZdfbBar.module';
import {JryqZdfbTableModule} from '../../components/jryqZdfbTable/jryqZdfbTable.module';



//人物活跃度TOP10
import {JryqRwhydTopModule} from '../../components/jryqRwhydTop/jryqRwhydTop.module';
import {JryqRwhydBarModule} from '../../components/jryqRwhydBar/jryqRwhydBar.module';
import {JryqRwhydTableModule} from '../../components/jryqRwhydTable/jryqRwhydTable.module';


//舆情日报部分
import {JryqDailyModule} from '../../components/jryqDaily/jryqDaily.module';



@NgModule({
    imports: [aqscjdjRouting, JryqRwhydBarModule,JryqZdfbBarModule,JryqZtfbPieModule, JryqWzsxtjBarModule,JryqZtqstLineModule,CommonModule, ArticlesSortModule, TabsModule, BreadLineModule, DropdownJudgedModule, DropdownClassifyModule, DropdownWarningModule, DropdownArticlesOutModule, JryqArticlesListConentModule, JryqArticlesListOptionModule, JryqWzsxtjTableModule, JryqWzsxtjTopModule, JryqZtfbTableModule, JryqZtqstTopModule, JryqZtqstTableModule, JryqRwhydTableModule, JryqZdfbTopModule, JryqZdfbTableModule, JryqRwhydTopModule, JryqDailyModule],
    declarations: [AqscjdjComponent],
    exports: [AqscjdjComponent,CommonModule]

})
export class AqscjdjModule {
}