/**
 * Created by topcom on 2016/9/18.
 */
import { Component }       from '@angular/core';
@Component({
    selector: 'dropdown-classify',
    templateUrl:'app/components/dropdownClassify/dropdownClassify.html',
    styleUrls: ['app/pages/yqyj/yqyj.css']
})
export class DropdownClassifyComponent {
    public disabled:boolean = false;
    public status:{isopen:boolean} = {isopen: false};
    public items:Array<string> = ['The first choice!',
        'And another choice for you.', 'but wait! A third!'];

    public toggled(open:boolean):void {
        console.log('Dropdown is now: ', open);
    }

    public toggleDropdown($event:MouseEvent):void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }
}
