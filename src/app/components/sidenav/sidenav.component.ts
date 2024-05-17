import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import {
  NOTE_ICON,
  REMINDER_ICON,
  EDIT_ICON,
  ARCHIVE_ICON,
  TRASH_ICON,
  DELETE_FOREVER_ICON,
} from 'src/assets/svg-icons';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Subscription } from 'rxjs';
import { NoteServiceService } from 'src/app/services/note-service/note-service.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit,OnDestroy {

  drawerState:boolean=false;
  subscription!:Subscription;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private dataService:DataServiceService,private noteService:NoteServiceService) {

    iconRegistry.addSvgIconLiteral(
      'note-icon',
      sanitizer.bypassSecurityTrustHtml(NOTE_ICON)
    );

    iconRegistry.addSvgIconLiteral(
      'reminder-icon',
      sanitizer.bypassSecurityTrustHtml(REMINDER_ICON)
    );

    iconRegistry.addSvgIconLiteral(
      'edit-icon',
      sanitizer.bypassSecurityTrustHtml(EDIT_ICON)
    );

    iconRegistry.addSvgIconLiteral(
      'Archive-icon',
      sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON)
    );

    iconRegistry.addSvgIconLiteral(
      'trash-icon',
      sanitizer.bypassSecurityTrustHtml(DELETE_FOREVER_ICON)
    );


   }

  ngOnInit(): void {
    this.dataService.currDrawerState.subscribe(
      (res)=>(this.drawerState=res)
    );
  }

  ngOnDestroy()
 {
  this.subscription.unsubscribe();
 }
}
 