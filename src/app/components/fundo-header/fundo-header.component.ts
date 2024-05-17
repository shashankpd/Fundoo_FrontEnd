import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import {
  MENU_ICON,
  SEARCH_ICON,
  REFRESH_ICON,
  LIST_VIEW_ICON,
  SETTING_ICON,
  OTHER_MENU_ICON,
  EDIT_ICON,
  ARCHIVE_ICON,
  TRASH_ICON,
  DELETE_FOREVER_ICON,
} from 'src/assets/svg-icons';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-fundo-header',
  templateUrl: './fundo-header.component.html',
  styleUrls: ['./fundo-header.component.scss']
})
export class FundoHeaderComponent implements OnInit {
   
  drawerState!:boolean;

  searchString!:string;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private dataService:DataServiceService) {

    iconRegistry.addSvgIconLiteral(
      'menu-icon',
      sanitizer.bypassSecurityTrustHtml(MENU_ICON)
    );

    iconRegistry.addSvgIconLiteral(
      'search-icon',
      sanitizer.bypassSecurityTrustHtml(SEARCH_ICON)
    );

    iconRegistry.addSvgIconLiteral(
      'refresh-icon',
      sanitizer.bypassSecurityTrustHtml(REFRESH_ICON)
    );

    iconRegistry.addSvgIconLiteral(
      'list-view-icon',
      sanitizer.bypassSecurityTrustHtml(LIST_VIEW_ICON)
    );

    iconRegistry.addSvgIconLiteral(
      'settings-icon',
      sanitizer.bypassSecurityTrustHtml(SETTING_ICON)
    );

    iconRegistry.addSvgIconLiteral(
      'other-menu-icon',
      sanitizer.bypassSecurityTrustHtml(OTHER_MENU_ICON)
    );

    iconRegistry.addSvgIconLiteral(
      'trash-icon',
      sanitizer.bypassSecurityTrustHtml(SETTING_ICON)
    );

   }

  ngOnInit(): void 
  {
    this.dataService.currDrawerState.subscribe(
      (res)=>this.drawerState=res);

      this.dataService.currSearchString.subscribe(
        (res)=>this.searchString=res);
  }
  handleDrawer()
  {
    this.dataService.updateDrawerState(!this.drawerState);
  }

  handelSerchString(){
    this.dataService.updateSearchString(this.searchString);
  }
}
